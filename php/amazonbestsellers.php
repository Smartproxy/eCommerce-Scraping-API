<?php

$params = array(
    'target' => 'amazon_bestsellers',
    'query' => '2407760011',
    'domain' => 'com',
    'locale' => 'en_us',
    'device_type' => 'desktop',
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