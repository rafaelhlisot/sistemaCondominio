<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Unit;
use App\Models\UnitPeople;
use App\Models\UnitPet;
use App\Models\unitvehicle;

class UnitController extends Controller
{
    public function getInfo($id) {
        $array = ['error' => ''];

        $unit = Unit::find($id);

        if($unit) {
            $peoples = UnitPeople::where('id_unit', $id)->get();
            $pets = UnitPet::where('id_unit', $id)->get();
            $vehicles = UnitVehicle::where('id_unit', $id)->get();

            foreach ($peoples as $pKey => $pValue) {
                $peoples[$pKey]['birthdate'] = date('d/m/t', strtotime($pValue['birthdate']));
            }

            $array['peoples'] = $peoples;
            $array['pets'] = $pets;
            $array['vehicles'] = $vehicles;
        } else {
            $array['error'] = 'Propriedade inexistente';

            return $array;
        }

        return $array;
    }
}
