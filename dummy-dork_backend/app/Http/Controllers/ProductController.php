<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(){
        $client = new Client();
        $products = $client->request('GET', 'https://dummyjson.com/products');
        return $products->getBody();
    }
}
