<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Register extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_device',
        'temperatura',
        'suciedad',
        'nivel_agua',
        'created_at',
    ];

    public function device()
    {
        return $this->belongsTo(Device::class);
    }
}
