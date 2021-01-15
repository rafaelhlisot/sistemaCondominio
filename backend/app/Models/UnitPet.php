<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class unitpet extends Model
{
    protected $hidden = [
        'id_unit'
    ];

    public $timestamps = false;
    public $table = 'unitpets';
}
