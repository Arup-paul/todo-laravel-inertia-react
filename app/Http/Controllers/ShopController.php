<?php

namespace App\Http\Controllers;

use App\Models\Shop;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ShopController extends Controller
{
    public function __invoke()
    {
        $shop  = Shop::get();

        return Inertia::render('Shop/All',[
            'shops' => $shop
        ]);
    }


}
