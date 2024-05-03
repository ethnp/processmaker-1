<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('process_requests', function (Blueprint $table) {
            $table->index(['status', 'case_number']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('process_requests', function (Blueprint $table) {
            $table->dropIndex(['status', 'case_number']);
        });
    }
};