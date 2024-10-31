<?php

declare(strict_types=1);

namespace ProcessMaker\Http\Controllers\Api\V1_1;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use ProcessMaker\Facades\ScreenCompiledManager;
use ProcessMaker\Http\Controllers\Controller;
use ProcessMaker\Http\Resources\V1_1\TaskInterstitialResource;
use ProcessMaker\Http\Resources\V1_1\TaskResource;
use ProcessMaker\Http\Resources\V1_1\TaskScreen;
use ProcessMaker\Models\ProcessRequest;
use ProcessMaker\Models\ProcessRequestToken;
use ProcessMaker\ProcessTranslations\ProcessTranslation;

class TaskController extends Controller
{
    protected $defaultFields = [
        'id',
        'element_id',
        'element_name',
        'element_type',
        'status',
        'due_at',
        'user_id',
        'process_request_id',
    ];

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = ProcessRequestToken::select($this->defaultFields)
            ->where('element_type', 'task');
        $include = request()->get('include', '');
        $include = $include ? explode(',', $include) : [];

        if (in_array('user', $include)) {
            $query->with(['user' => function ($query) {
                $query->select([
                    'id',
                    'firstname',
                    'lastname',
                    'email',
                    'avatar',
                ]);
            }]);
        }

        $this->processFilters(request(), $query);

        $pagination = $query->paginate(request()->get('per_page', 10));
        $perPage = $pagination->perPage();
        $page = $pagination->currentPage();
        $lastPage = $pagination->lastPage();

        return [
            'data' => $pagination->items(),
            'meta' => [
                'total' => $pagination->total(),
                'perPage' => $pagination->perPage(),
                'currentPage' => $pagination->currentPage(),
                'lastPage' => $pagination->lastPage(),
                'count' => $pagination->count(),
                'from' => $perPage * ($page - 1) + 1,
                'last_page' => $lastPage,
                'path' => '/',
                'per_page' => $perPage,
                'to' => $perPage * ($page - 1) + $perPage,
                'total_pages' => ceil($pagination->count() / $perPage),
            ],
        ];
    }

    private function processFilters(Request $request, Builder $query)
    {
        if (request()->has('user_id')) {
            ProcessRequestToken::scopeWhereUserAssigned($query, request()->get('user_id'));
        }

        if ($request->has('process_request_id')) {
            $query->where(function ($q) use ($request) {
                $q->where('process_request_id', $request->input('process_request_id'));
                $this->addSubprocessTasks($request, $q);
            });
        }
        if ($request->has('status')) {
            $query->where('status', $request->input('status'));
        }
    }

    private function addSubprocessTasks(Request $request, Builder &$q)
    {
        if ($request->has('include_sub_tasks')) {
            $q->orWhereIn(
                'process_request_id',
                ProcessRequest::select('id')
                    ->where('parent_request_id', $request->input('process_request_id'))
            );
        }
    }

    public function show(ProcessRequestToken $task)
    {
        $resource = TaskResource::preprocessInclude(request(), ProcessRequestToken::where('id', $task->id));

        return $resource->toArray(request());
    }

    public function showScreen($taskId)
    {
        $task = ProcessRequestToken::select(
            array_merge($this->defaultFields, ['process_request_id', 'process_id'])
        )
        // eager loading process_request.process_version_id
        ->with([
            'processRequest'=> function ($query) {
                $query->select('id', 'process_version_id');
            },
        ])->findOrFail($taskId);

        // Prepare the key for the screen cache
        $processId = $task->process_id;
        $processVersionId = $task->processRequest->process_version_id;
        $language = ProcessTranslation::getCurrentUserLanguage();
        $screenVersion = $task->getScreenVersion();
        $key = ScreenCompiledManager::createKey($processId, $processVersionId, $language, $screenVersion->screen_id, $screenVersion->id);

        // Get the screen content from the cache or compile it
        $translatedScreen = ScreenCompiledManager::getCompiledContent($key);
        if (!isset($translatedScreen)) {
            $response = new TaskScreen($task);
            $translatedScreen = $response->toArray(request())['screen'];
            ScreenCompiledManager::storeCompiledContent($key, $translatedScreen);
        }

        return response($translatedScreen, 200);
    }

    public function showInterstitial($taskId)
    {
        $task = ProcessRequestToken::select(
            array_merge($this->defaultFields, ['process_request_id', 'process_id'])
        )->findOrFail($taskId);
        $response = new TaskInterstitialResource($task);
        $response = response($response->toArray(request())['screen'], 200);
        $now = time();
        // screen cache time
        $cacheTime = config('screen_task_cache_time', 86400);
        $response->headers->set('Cache-Control', 'max-age=' . $cacheTime . ', must-revalidate, public');
        $response->headers->set('Expires', gmdate('D, d M Y H:i:s', $now + $cacheTime) . ' GMT');

        return $response;
    }

    public function count()
    {
        $count = ProcessRequestToken::select('id')
            ->where('element_type', 'task')
            ->where('user_id', Auth::id())
            ->where('status', 'ACTIVE')
            ->count();
        return ['count' => $count];
    }
}