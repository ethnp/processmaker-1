<?php

namespace ProcessMaker\Templates;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Arr;
use Illuminate\View\View;
use ProcessMaker\Http\Controllers\Api\ExportController;
use ProcessMaker\Models\Process;
use ProcessMaker\Models\ProcessCategory;
use ProcessMaker\Models\ProcessTemplateCategory;
use ProcessMaker\Models\ProcessTemplates;
use ProcessMaker\Traits\HasControllerAddons;
use SebastianBergmann\CodeUnit\Exception;

/**
 * Summary of ProcessTemplate
 */
class ProcessTemplate implements TemplateInterface
{
    use HasControllerAddons;

    public function index(Request $request)
    {
        $orderBy = $this->getRequestSortBy($request, 'name');
        $include = $this->getRequestInclude($request);

        $templates = ProcessTemplates::with($include);
        $filter = $request->input('filter');

        $templates = $templates->select('process_templates.*')
            ->leftJoin('users as user', 'process_templates.user_id', '=', 'user.id')
            ->orderBy(...$orderBy)
            ->where(function ($query) use ($filter) {
                $query->where('process_templates.name', 'like', '%' . $filter . '%')
                    ->orWhere('process_templates.description', 'like', '%' . $filter . '%')
                    ->orWhere('user.firstname', 'like', '%' . $filter . '%')
                    ->orWhere('user.lastname', 'like', '%' . $filter . '%');
            })
            ->get();

        return $templates;
    }

    /**
     * Summary of save
     * @param mixed $request
     * @return JsonResponse
     */
    public function save($request) : JsonResponse
    {
        $processId = $request->id;
        $name = $request->name;
        $description = $request->description;
        $userId = $request->user_id;
        $category = $request->process_template_category_id;
        $mode = $request->mode;

        // Get process manifest
        $manifest = $this->getManifest('process', $processId);
        $rootUuid = $manifest->getData()->root;
        $export = $manifest->getData()->export;
        $svg = $export->$rootUuid->attributes->svg;

        // Discard ALL assets/dependents
        if ($mode === 'discard') {
            $manifest = json_decode(json_encode($manifest), true);
            $rootExport = Arr::first($manifest['original']['export'], function ($value, $key) use ($rootUuid) {
                return $key === $rootUuid;
            });
            data_set($rootExport, 'dependents.*.discard', true);
            data_set($manifest, 'original.export', $rootExport);
        }

        $model = ProcessTemplates::firstOrCreate([
            'name' => $name,
            'description' => $description,
            'user_id' => $userId,
            'manifest' => json_encode($manifest),
            'svg' => $svg,
            'process_id' => $processId,
            'process_template_category_id' => null,
        ]);

        return response()->json(['model' => $model]);
    }

    public function view() : bool
    {
        dd('PROCESS TEMPLATE VIEW');
    }

    public function edit($template) : JsonResponse
    {
        dd('PROCESS TEMPLATE EDIT');
    }

    public function update($request) : JsonResponse
    {
        $id = (int) $request->id;
        $template = ProcessTemplates::where('id', $id)->firstOrFail();
        if (!isset($request->process_id)) {
            // This is an update from the template configs page
            $template->fill($request->except('id'));
        } else {
            // This is an update from a the process designer
            // Get process manifest
            $processId = $request->process_id;
            $mode = $request->mode;

            $manifest = $this->getManifest('process', $processId);
            $rootUuid = $manifest->getData()->root;
            $export = $manifest->getData()->export;
            $svg = $export->$rootUuid->attributes->svg;

            // Discard ALL assets/dependents
            if ($mode === 'discard') {
                $manifest = json_decode(json_encode($manifest), true);
                $rootExport = Arr::first($manifest['original']['export'], function ($value, $key) use ($rootUuid) {
                    return $key === $rootUuid;
                });
                data_set($rootExport, 'dependents.*.discard', true);
                data_set($manifest, 'original.export', $rootExport);
            }

            $template->fill($request->except('id'));
            $template->svg = $svg;
            $template->manifest = json_encode($manifest);
        }

        // Catch errors to send more specific status
        try {
            $template->saveOrFail();
        } catch (Exception $e) {
            return response(
                ['message' => $e->getMessage(),
                    'errors' => ['bpmn' => $e->getMessage()], ],
                422
            );
        }

        return response()->json();
    }

    public function configure(int $id) : array
    {
        $template = (object) [];

        $query = ProcessTemplates::select(['name', 'description'])->where('id', $id)->firstOrFail();

        $template->id = $id;
        $template->name = $query->name;
        $template->description = $query->description;

        $categories = ProcessTemplateCategory::orderBy('name')
            ->where('status', 'ACTIVE')
            ->get()
            ->pluck('name', 'id')
            ->toArray();
        $addons = $this->getPluginAddons('edit', compact(['template']));

        return [$template, $addons];
    }

    public function destroy() : bool
    {
        dd('PROCESS TEMPLATE DESTROY');
    }

    /**
     * Get process manifest.
     *
     * @param string $type
     *
     * @param Request $request
     *
     * @return JSON
     */
    public function getManifest(string $type, int $id) : object
    {
        $response = (new ExportController)->manifest($type, $id);

        return $response;
    }

    /**
     * Get the where array to filter the resources.
     *
     * @param Request $request
     * @param array $searchableColumns
     *
     * @return array
     */
    protected function getRequestFilterBy(Request $request, array $searchableColumns)
    {
        $where = [];
        $filter = $request->input('filter');
        if ($filter) {
            foreach ($searchableColumns as $column) {
                // for other columns, it can match a substring
                $sub_search = '%';
                if (array_search('status', explode('.', $column), true) !== false) {
                    // filtering by status must match the entire string
                    $sub_search = '';
                }
                $where[] = [$column, 'like', $sub_search . $filter . $sub_search, 'or'];
            }
        }

        return $where;
    }

    /**
     * Get included relationships.
     *
     * @param Request $request
     *
     * @return array
     */
    protected function getRequestSortBy(Request $request, $default)
    {
        $column = $request->input('order_by', $default);
        $direction = $request->input('order_direction', 'asc');

        return [$column, $direction];
    }

    /**
     * Get included relationships.
     *
     * @param Request $request
     *
     * @return array
     */
    protected function getRequestInclude(Request $request)
    {
        $include = $request->input('include');

        return $include ? explode(',', $include) : [];
    }

    public function existingTemplate($request)
    {
        $processId = $request->id;
        $name = $request->name;

        $template = ProcessTemplates::where(['name' => $name])->first();
        if ($template !== null) {
            // If same asset has been Saved as Template previously, offer to choose between “Update Template” and “Save as New Template”
            return $template->id;
        }

    }
}
