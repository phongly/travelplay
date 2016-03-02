<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\Mobile;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        Model::unguard();

        DB::table('mobiles')->delete();

        $mobiles = array(
            ['name' => 'ACER STREAM', 'description' => 'We are proud to offer you our hi-tech original goods. The products of our store are the real bestsellers and we have a great number of faithful customers. Their testimonials prove that the reputation of our company is simply perfect. We observe the policy of providing only branded commodities. This fact confirms that we sell only high quality goods at a fair price.', 'price' => '549.00', 'img' => '1-home-1.jpg.png'],
            ['name' => 'ANYCOOL D58', 'description' => 'The products of our store are the real bestsellers and we have a great number of faithful customers. Their testimonials prove that the reputation of our company is simply perfect. We observe the policy of providing only branded commodities. This fact confirms that we sell only high quality goods at a fair price. Our products have some advantages such as durability and reliability.', 'price' => '215.00', 'img' => '4-home-1.jpg.png'],
            ['name' => 'ANYCOOL I929', 'description' => 'Their testimonials prove that the reputation of our company is simply perfect. We observe the policy of providing only branded commodities. This fact confirms that we sell only high quality goods at a fair price. Our products have some advantages such as durability and reliability. You know nowadays we sell not just hi-tech products, we sell a part of a style, culture.', 'price' => '39.20', 'img' => '7-home-1.jpg.png'],
            ['name' => 'ANYCOOL KDI D528', 'description' => 'Their testimonials prove that the reputation of our company is simply perfect. We observe the policy of providing only branded commodities. This fact confirms that we sell only high quality goods at a fair price. Our products have some advantages such as durability and reliability. You know nowadays we sell not just hi-tech products, we sell a part of a style, culture.', 'price' => '315.00', 'img' => '10-home-1.jpg.png'],
            ['name' => 'ANYCOOL KDI T818', 'description' => 'This fact confirms that we sell only high quality goods at a fair price. Our products have some advantages such as durability and reliability. You know nowadays we sell not just hi-tech products, we sell a part of a style, culture. It is a real mainstream because this good is very widespread, indispensable and it has a high sales rate. We are proud to offer you our hi-tech original goods.', 'price' => '270.00', 'img' => '13-home-1.jpg.png'],
            ['name' => 'ANYCOOL T55', 'description' => 'Our products have some advantages such as durability and reliability. You know nowadays we sell not just hi-tech products, we sell a part of a style, culture. It is a real mainstream because this good is very widespread, indispensable and it has a high sales rate. We always stay in touch with the latest fashion tendencies and hi-tech achievements.', 'price' => '620.00', 'img' => '16-home-1.jpg.png'],
        );

        // Loop through each user above and create the record for them in the database
        foreach ($mobiles as $mobile)
        {
            Mobile::create($mobile);
        }

        Model::reguard();
    }
}