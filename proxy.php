<?php

$url = $_GET['url'] ?? '';
if (!$url) {
  http_response_code(400);
  exit("Missing URL");
}

set_time_limit(0);

// CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: *");

$ch = curl_init($url);

curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, false);
curl_setopt($ch, CURLOPT_TIMEOUT, 0);

// IMPORTANT: unele streamuri cer user-agent
curl_setopt($ch, CURLOPT_USERAGENT, "Mozilla/5.0");

// CRUCIAL pentru HLS streaming
curl_setopt($ch, CURLOPT_HEADER, false);

header("Content-Type: application/octet-stream");

curl_setopt($ch, CURLOPT_WRITEFUNCTION, function($ch, $data) {
  echo $data;
  flush();
  return strlen($data);
});

curl_exec($ch);
curl_close($ch);