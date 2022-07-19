<?php

namespace ProcessMaker\Models;

use ProcessMaker\Traits\Exportable;
use Illuminate\Database\Eloquent\Model;

class ProcessNotificationSetting extends Model
{
    use Exportable;
    
    protected $connection = 'processmaker';

    public $timestamps = false;

    public $guarded = ['process_id'];
}
