<?php

declare(strict_types=1);

namespace ProcessMaker\Http\Controllers\Api\V1_1;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use ProcessMaker\Http\Controllers\Controller;
use ProcessMaker\Http\Resources\V1_1\TaskInterstitialResource;
use ProcessMaker\Http\Resources\V1_1\TaskResource;
use ProcessMaker\Http\Resources\V1_1\TaskScreen;
use ProcessMaker\Models\ProcessRequest;
use ProcessMaker\Models\ProcessRequestToken;

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

    public function show(ProcessRequestToken $task)
    {
        $resource = TaskResource::preprocessInclude(request(), ProcessRequestToken::where('id', $task->id));

        return $resource->toArray(request());
    }

    /**
     * Display the screen for a given task.
     *
     * @throws ModelNotFoundException If the task is not found.
     */
    public function showScreen(Request $request, int $taskId): Response
    {
        // Fetch the task data.
        $task = ProcessRequestToken::select(
            array_merge($this->defaultFields, ['process_request_id', 'process_id'])
        )->findOrFail($taskId);

        // Prepare the response.
        $response = new TaskScreen($task);
        $screen = $response->toArray($request)['screen'];
        $now = isset($screen['updated_at'])
            ? Carbon::parse($screen['updated_at'])->timestamp
            : time();

        // Create the response object.
        $response = response($screen, 200);

        // Set Cache-Control headers.
        $cacheTime = config('screen_task_cache_time', 86400);
        $response->headers->set('Cache-Control', 'no-cache, must-revalidate, public');
        $response->headers->set('Expires', gmdate('D, d M Y H:i:s', $now + $cacheTime) . ' GMT');

        // Set Last-Modified header.
        $response->headers->set('Last-Modified', gmdate('D, d M Y H:i:s', $now) . ' GMT');

        // Return 304 if the resource has not been modified since the provided date.
        if ($request->headers->has('If-Modified-Since')) {
            $ifModifiedSince = strtotime($request->headers->get('If-Modified-Since'));
            if ($ifModifiedSince >= $now) {
                return response()->noContent(304);
            }
        }

        return $response;
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
}
