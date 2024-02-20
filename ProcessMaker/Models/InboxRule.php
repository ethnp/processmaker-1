<?php

namespace ProcessMaker\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use ProcessMaker\Models\ProcessMakerModel;
use ProcessMaker\Models\ProcessRequestToken;
use ProcessMaker\Package\SavedSearch\Models\SavedSearch;

class InboxRule extends ProcessMakerModel
{
    use HasFactory;

    protected $casts = [
        'submit_data' => 'array',
    ];

    protected $table = 'inbox_rules';

    /**
     * Define the relationship with ProcessRequestToken model
     *
     * @return BelongsTo
     */
    public function task(): BelongsTo
    {
        return $this->belongsTo(ProcessRequestToken::class, 'process_request_token_id');
    }

    /**
     * Define the relationship with SavedSearch model
     *
     * @return BelongsTo
     */
    public function savedSearch(): BelongsTo
    {
        return $this->belongsTo(SavedSearch::class, 'saved_search_id');
    }
}
