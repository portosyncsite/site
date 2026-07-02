<?php
header('Content-Type: application/json');
$rssUrl = 'https://tvinfo.ro/feed';
$xml = @simplexml_load_file($rssUrl, 'SimpleXMLElement', LIBXML_NOCDATA);

if(!$xml) {
    echo json_encode(['error' => 'Nu am putut încărca feed-ul RSS.']);
    exit;
}

$items = [];
foreach($xml->channel->item as $item) {
    $items[] = [
        'title' => (string)$item->title,
        'link' => (string)$item->link,
        'pubDate' => (string)$item->pubDate,
        'description' => (string)$item->description
    ];
}

echo json_encode(['items' => $items]);
?>