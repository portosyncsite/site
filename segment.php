<?php

$url = $_GET['url'] ?? '';

$allowedHost = 'forever.megogo.xyz';

$host = parse_url($url, PHP_URL_HOST);

if ($host !== $allowedHost) {
    http_response_code(403);
    exit('Forbidden');
}

header('Access-Control-Allow-Origin: *');

$ch = curl_init($url);

curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_FOLLOWLOCATION => true,
]);

$data = curl_exec($ch);
$contentType = curl_getinfo($ch, CURLINFO_CONTENT_TYPE);

curl_close($ch);

if (!$data) {
    http_response_code(502);
    exit;
}

if ($contentType) {
    header('Content-Type: ' . $contentType);
}

echo $data;