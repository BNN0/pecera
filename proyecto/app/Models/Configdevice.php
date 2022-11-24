<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Configdevice extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_device',
        'time_food',
    ];
}
