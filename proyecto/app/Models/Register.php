<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

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

    public function obtenerRegistrosFiltrados($user_id){
        return DB::select("SELECT * FROM registers WHERE device_id = ANY (SELECT devices.id FROM devices WHERE devices.user_id = ?)", [$user_id]);
        
    }
}
