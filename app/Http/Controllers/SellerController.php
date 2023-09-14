<?php

namespace App\Http\Controllers;

use App\Models\Seller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SellerController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
       $sellers = Seller::get();

       return Inertia::render('Seller/All',[
           'sellers' => $sellers
       ]);
    }
}
