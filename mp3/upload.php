<?php

$dir = "uploads/";

if(isset($_FILES["song"])){

$name = basename($_FILES["song"]["name"]);

$path = $dir . $name;

$type = strtolower(pathinfo($path, PATHINFO_EXTENSION));

if($type != "mp3"){

echo "Only MP3 files allowed";
exit;

}

if(move_uploaded_file($_FILES["song"]["tmp_name"], $path)){

header("Location: index.php");

}else{

echo "Upload failed";

}

}

?>