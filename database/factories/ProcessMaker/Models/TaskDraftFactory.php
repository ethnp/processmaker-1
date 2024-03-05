<?php

namespace Database\Factories\ProcessMaker\Models;

use Illuminate\Database\Eloquent\Factories\Factory;
use ProcessMaker\Models\TaskDraft;

class TaskDraftFactory extends Factory
{
    protected $model = TaskDraft::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'task_id' => null,
            'data' => json_encode(['key1' => 'value1', 'key2' => 'value2']),
        ];
    }
}
