<?php

$params = array(
    'target' => 'wayfair',
    'url' => 'https://www.wayfair.com/rugs/pdp/highland-dunes-gunnell-30-x-18-non-slip-outdoor-door-mat-w005481595.html',
    'parse' => False
);

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, 'https://scraper-api.smartproxy.com/v2/scrape');
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
