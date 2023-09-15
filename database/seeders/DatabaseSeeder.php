<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Seller;
use App\Models\Shop;
use App\Models\Store;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        User::create([
            'name' => 'Arup Paul',
            'email' => 'arup@gmail.com',
            'password' => bcrypt('12345678'),
            'email_verified_at' => now(),
            'remember_token' => Str::random(10),
        ]);

        Shop::factory(10)->create();
        Seller::factory(10)->create();


        //store data


        $data = [
            [
            'source' => 'Store 1',
            'type' => 'Auth',
            'timestamp' => now(),
            'details' => json_encode([
                'shop_id' => Shop::inRandomOrder()->first()->id,
                'code' => 1,
                'success' => true,
                'message' => 'Success',
                'extra_info' => 'more info',

            ])
          ],
            [
                'source' => 'Store 2',
                'type' => 'Order',
                'timestamp' => now(),
                'details' => json_encode([
                    'seller_id' => Seller::inRandomOrder()->first()->id,
                    'message_type' => 0,
                    'order_status' => "This is a test message",
                    'trade_order_id' => '123456',
                    'trade_order_line_id' => '12345',
                    'status_update_time' => now(),
                    'site' => 'lazada_sg',
                ])
            ],

        ];

        Store::insert($data);

    }


}
