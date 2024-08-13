<?php

namespace ProcessMaker\Http\Middleware;

use Closure;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Auth\Middleware\Authorize as Middleware;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use ProcessMaker\Models\Group;
use ProcessMaker\Models\Process;
use ProcessMaker\Models\Screen;
use ProcessMaker\Models\Script;
use ProcessMaker\Models\User;
use Symfony\Component\HttpFoundation\Response;

class CustomAuthorize extends Middleware
{
    public function handle($request, Closure $next, $ability, ...$models)
    {
        $modelsString = implode('-', $models);
        $permission = $ability . '-' . $modelsString;

        try {
            return parent::handle($request, $next, $ability, ...$models);
        } catch (AuthorizationException $e) {
            return $this->handleCustomLogic($request, $next, $permission, $e, ...$models);
        } catch (\Exception $e) {
            Log::error('An unexpected error occurred in CustomAuthorize middleware.', [
                'exception' => $e,
                'permission' => $permission,
                'models' => $models,
            ]);

            return $this->handleCustomLogic($request, $next, $permission, $e, ...$models);
        }
    }

    private function handleCustomLogic($request, Closure $next, $permission, $error, ...$models)
    {
        $user = $request->user();
        $userPermissions = $this->getUserPermissions($user);
        if (!$this->hasPermission($userPermissions, $permission)) {
            // Check for 'create-projects' permission and validate project access
            if ($this->hasPermission($userPermissions, 'create-projects')) {
                $projects = $this->getProjectAssetsForUser($user->id);
                if ($projects && $this->isAllowedEndpoint($projects, $request->path(), $permission, $models)) {
                    return $next($request);
                }
            }
            // Re-throw the original exception if permission is not allowed
            throw $error;
        }

        return $next($request);
    }

    private function getUserPermissions($user)
    {
        return Cache::remember("user_{$user->id}_permissions", 86400, function () use ($user) {
            return $user->permissions()->pluck('name')->toArray();
        });
    }

    private function hasPermission($userPermissions, $permission)
    {
        return in_array($permission, $userPermissions);
    }

    private function getProjectAssetsForUser($userId)
    {
        if (!hasPackage('package-projects')) {
            return [];
        }

        return Cache::remember("user_{$userId}_project_assets", 86400, function () use ($userId) {
            return $this->getUserProjectsAssets($userId);
        });
    }

    private function getUserProjectsAssets($userId)
    {
        $userProjectsWithAssets = $this->fetchUserProjectAssets($userId);

        return $this->formatProjectAssetsArray($userProjectsWithAssets);
    }

    /**
     * Fetch projects with assets for the given user.
     */
    private function fetchUserProjectAssets($userId)
    {
        // Fetch projects where the user is the owner
        $ownerProjects = DB::table('projects')
            ->where('user_id', $userId)
            ->pluck('id')
            ->toArray();

        // Fetch projects where the user is a member (User::class) or belongs to a group (Group::class)
        $memberProjects = DB::table('project_members')
            ->where(function ($query) use ($userId) {
                $query->where('member_id', $userId)
                    ->where('member_type', User::class);
            })
            ->orWhere(function ($query) use ($userId) {
                $query->where('member_type', Group::class)
                    ->whereIn('member_id', function ($subQuery) use ($userId) {
                        $subQuery->select('group_id')
                            ->from('group_members')
                            ->where('member_id', $userId);
                    });
            })
            ->pluck('project_id')
            ->toArray();

        // Combine both sets of project IDs and remove duplicates
        $projectIds = array_unique(array_merge($ownerProjects, $memberProjects));

        // Fetch project assets for the combined project IDs
        return DB::table('projects')
        ->join('project_assets', 'projects.id', '=', 'project_assets.project_id')
        ->whereIn('projects.id', $projectIds)
        ->select('project_assets.asset_id as asset_id', 'project_assets.asset_type')
        ->get()
        ->unique()
        ->toArray();
    }

    /**
     * Format projects with assets into the desired structure.
     */
    // TODO: Check if the user permissions are cleared when being added/remove from project
    private function formatProjectAssetsArray($projectsWithAssets)
    {
        $formattedArray = [];

        foreach ($projectsWithAssets as $project) {
            $assetType = $project->asset_type;
            $assetId = $project->asset_id;

            if (!isset($formattedArray[$assetType])) {
                $formattedArray[$assetType] = [];
            }

            if (!isset($formattedArray[$assetType])) {
                $formattedArray[$assetType] = [];
            }

            $formattedArray[$assetType][] = $assetId;
        }

        return $formattedArray;
    }

    private function isAllowedEndpoint($projects, $currentPath, $permission, $models)
    {
        $allowedEndpoints = $this->getAllowedEndpoints($projects);
        if (Str::contains($currentPath, $allowedEndpoints) && $this->isProjectAsset($permission, $models)) {
            return true;
        }

        return false;
    }

    private function getAllowedEndpoints($assets) : array
    {
        $allowedEndpoints = ['api'];
        $endpoints = [];
        // foreach ($projects as $projectId => $assets) {
        foreach ($assets as  $assetType => $assetIds) {
            foreach ($assetIds as $id) {
                $endpoints = array_merge($endpoints, $this->getEndpointsForAsset($assetType, $id));
            }
        }
        // }

        return array_merge($allowedEndpoints, $endpoints);
    }

    // TODO: Check for second parameter in the api and check against the returned project assets array.
    // TODO: Add trait to asset policies to implement this code

    private function getEndpointsForAsset($assetType, $assetId)
    {
        $endpoints = [];

        switch ($assetType) {
            case Process::class:
                $endpoints[] = "modeler/{$assetId}";
                break;
            case Screen::class:
                $endpoints[] = "designer/screen-builder/{$assetId}/edit";
                $endpoints[] = "designer/screens/{$assetId}/edit";
                $endpoints[] = 'designer/screens/preview';
                break;
            case Script::class:
                $endpoints[] = "designer/scripts/{$assetId}/builder";
                $endpoints[] = "designer/scripts/{$assetId}/edit";
                $endpoints[] = 'designer/scripts/preview';
                break;
            default:
                if (class_exists('ProcessMaker\Packages\Connectors\DataSources\Models\DataSource')
                    && $assetType === 'ProcessMaker\Packages\Connectors\DataSources\Models\DataSource') {
                    $endpoints[] = "designer/data-sources/{$assetId}/edit";
                }
                if (class_exists('ProcessMaker\Package\PackageDecisionEngine\Models\DecisionTable')
                    && $assetType === 'ProcessMaker\Package\PackageDecisionEngine\Models\DecisionTable') {
                    $endpoints[] = "decision-tables/table-builder/{$assetId}/edit";
                }
                break;
        }

        return $endpoints;
    }

    private function isProjectAsset($permission, $params)
    {
        return $params && $params[0]
            ? $this->handleUpdateDeleteOperations($permission, class_basename($params[0]))
            : $this->checkForListCreateOperations($permission);
    }

    private function handleUpdateDeleteOperations($permission, $modelClass)
    {
        return $this->checkPermissionForAsset($permission, $this->getAssetName($modelClass));
    }

    private function getAssetName($modelClass)
    {
        $asset = Str::snake(class_basename($modelClass));

        if ($modelClass === 'DataSource') {
            $asset = 'data-source';
        }

        return $asset;
    }

    private function checkForListCreateOperations($permission)
    {
        $projectAssetTypes = ['process', 'screen', 'script', 'data-source', 'decision_table', 'pm-block'];

        foreach ($projectAssetTypes as $asset) {
            if (Str::contains($permission, $asset)) {
                return true;
            }
        }

        return false;
    }

    private function checkPermissionForAsset($permission, $asset)
    {
        return Str::contains($permission, $asset);
    }
}
