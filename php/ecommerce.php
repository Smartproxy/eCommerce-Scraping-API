<?php

$params = array(
    'target' => 'ecommerce',
    'url' => 'https://www.walmart.com/ip/Marketside-Pepperoni-Pizza-Traditional-Crust-Extra-Large-44-6-oz-Fresh/579824441?athbdg=L1600&from=searchResults',
    'device_type' => 'desktop',
    'parser_type' => 'ecommerce_product',
    'geo' => 'United States',
    'headless' => 'html',
    'locale' => 'en_us',
    'parse' => True
);

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, 'https://scrape.smartproxy.com/v1/tasks');
curl_setopt($ch, CURLOPT_USERPWD, 'SPusername' . ':' . 'SPpassword');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($params));
curl_setopt($ch, CURLOPT_POST, 1);

$headers = array();
$headers[] = 'Content-Type: application/json';
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$result = curl_exec($ch);
echo $result;

if (curl_errno($ch)) {
    echo 'Error:' . curl_error($ch);
}
curl_close ($ch);
?>