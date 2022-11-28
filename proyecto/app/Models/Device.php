<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Device extends Model
{
    use HasFactory;

    protected $fillable = [
        'serial',
    ];

    public function registers(){
        return $this->hasMany(Register::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
