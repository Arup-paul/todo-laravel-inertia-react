<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoresRequest;
use App\Models\Seller;
use App\Models\Shop;
use App\Models\Store;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StoreController extends Controller
{
     public function index(){
            $stores = Store::get();

            foreach ($stores as $store){
                if($store->type == 'Auth'){
                    $details = json_decode($store->details,true);
                    $shop = Shop::find($details['shop_id']);
                    $details['shop_name'] = $shop->name;

                }else{
                    $details = json_decode($store->details,true);
                    $seller = Seller::find($details['seller_id']);
                    $details['seller_name'] = $seller->name;
                }
                $store->details = $details;
            }




            return Inertia::render('Store/All',[
                'stores' => $stores
            ]);
     }

     public function create(){
             $shops = Shop::get();
             $sellers = Seller::get();
            return Inertia::render('Store/Create',[
                'shops' => $shops,
                'sellers' => $sellers,
            ]);
     }

     public function store(StoresRequest $request){

           $data = $request->validated();

           $details = '';
           if($data['type'] == 'Auth'){
               $detailsData = [
                 'shop_id' => $data['shop_id'],
                    'code' => $data['code'],
                    'success' => true,
                    'message' => $data['message'],
                    'extra_info' => $data['extra_info']
               ];
               $details = json_encode($detailsData);
              }else{
               $detailsData = [
                   'seller_id' => $data['seller_id'],
                   'message_type' => 0,
                   'order_status' => $data['order_status'],
                   'trade_order_id' => $data['trade_order_id'],
                   'trade_order_line_id' => $data['trade_order_line_id'],
                   'status_update_time' => now(),
                   'site' => $data['site'],
               ];
               $details = json_encode($detailsData);
              }


           Store::create([
               'source' => $data['source'],
               'type' => $data['type'],
               'timestamp' => now(),
               'details' => $details
           ]);


            return redirect()->route('stores.index');
     }

}
