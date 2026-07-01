<?php

$source = 'http://forever.megogo.xyz/iptv/QGB4M3H62GC7E3/7002/index.m3u8';

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/vnd.apple.mpegurl');

$m3u8 = file_get_contents($source);

if ($m3u8 === false) {
    http_response_code(502);
    exit('Cannot load playlist');
}

$base = dirname($source) . '/';

$lines = explode("\n", $m3u8);

foreach ($lines as &$line) {
    $line = trim($line);

    if (
        $line !== '' &&
        $line[0] !== '#' &&
        !preg_match('~^https?://~i', $line)
    ) {
        $line = 'segment.php?url=' . urlencode($base . $line);
    }
}

echo implode("\n", $lines);