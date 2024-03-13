<?php

namespace Database\Factories\ProcessMaker\Models;

use Illuminate\Database\Eloquent\Factories\Factory;
use ProcessMaker\Http\Controllers\Api\ExportController;
use ProcessMaker\Models\Screen;
use ProcessMaker\Models\ScreenCategory;
use ProcessMaker\Models\ScreenTemplates;
use ProcessMaker\Models\User;

/**
 * Model factory for process templates
 */
class ScreenTemplatesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $screen = Screen::factory()->create();
        // TODO: Handle storing screen manifests
        // $response = (new ExportController)->manifest('process', $process->id);

        // $manifest = json_decode($response->getContent(), true);

        return [
            'unique_template_id' => '',
            'name' => $this->faker->unique()->name(),
            'description' => $this->faker->unique()->sentence(20),
            'user_id' => User::factory()->create()->getKey(),
            'editing_screen_uuid' => null,
            'screen_type' => 'FORM',
            'media_collection' => $this->faker->unique()->name(),
            'manifest' => '{}',
            'is_public' => false,
            'is_system' => false,
            'asset_type' => null,
            'version' => '1.0.0',
            'screen_category_id' => function () {
                return ScreenCategory::factory()->create()->getKey();
            },
        ];
    }
}