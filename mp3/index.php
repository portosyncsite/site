<?php
$songs = glob("uploads/*.mp3");
?>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<title>portoSYNC MP3</title>
<link rel="icon" href="mp3fav.png" type="image/png" />
<link rel="apple-touch-icon" sizes="180x180" href="mp3fav.png">

<link rel="stylesheet" href="style.css">

<style>
.player {
  max-width: 400px;
  margin: 20px auto;
  text-align: center;
  font-family: sans-serif;
}
.player img#radioLogo {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 15px;
}
.track { margin: 10px 0; }
.controls button { margin: 0 5px; font-size: 20px; }
.radio-switch button { display: block; width: 100%; margin: 5px 0; }
#changeCoverBtn { margin-top: 10px; padding: 5px 10px; cursor: pointer; }
</style>

</head>
<body>

<div class="player">

<img id="radioLogo" src="mp3.png">

<div class="live"><span></span> MP3</div>

<div class="track">
<div id="title">nu ai ales o melodie</div>
<div id="artist">portoSYNC MP3 - #yourmp3here</div>
</div>

<div class="controls">
<button onclick="prev()">⏮</button>
<button onclick="togglePlay()">▶</button>
<button onclick="next()">⏭</button>
</div>

<div class="radio-switch">
<?php
$i = 0;
foreach($songs as $song){
    $name = basename($song);
    echo "<button onclick=\"playSong($i)\">$name</button>";
    $i++;
}
?>
</div>

<form action="upload.php" method="post" enctype="multipart/form-data">
<input type="file" name="song">
<button type="submit">⬆️</button>
</form>

<!-- Buton pentru schimbarea coverului Media Session -->
<button id="changeCoverBtn">💕</button>
<input type="file" id="coverUpload" accept="image/*" style="display:none;">

<div style="font-size:12px;opacity:.7;margin-top:10px">
versiunea: 109.7 • code name: prtsync27 • făcut de porto
</div>

</div>

<audio id="audio"></audio>

<script>
let songs = [
<?php
foreach($songs as $song){
    echo "'$song',";
}
?>
];

let current = 0;
let audio = document.getElementById("audio");

// Variabilă globală pentru Media Session cover
window.customCover = localStorage.getItem("customCover") || null;

// Input ascuns pentru cover Media Session
let coverUpload = document.getElementById("coverUpload");

// Buton care declanșează input-ul
document.getElementById("changeCoverBtn").onclick = () => coverUpload.click();

// Când user-ul alege o poză
coverUpload.onchange = function() {
    let file = this.files[0];
    if (!file) return;
    let reader = new FileReader();
    reader.onload = function(e){
        window.customCover = e.target.result;
        localStorage.setItem("customCover", window.customCover); // salvează pentru refresh
        alert("Cover Media Session schimbat!");
    }
    reader.readAsDataURL(file);
};

function playSong(i){
    current = i;
    audio.src = songs[i];
    audio.play();

    let filename = songs[i].split("/").pop();
    let title = filename.replace(".mp3","");

    document.getElementById("title").innerText = title;
    document.getElementById("artist").innerText = "portoSYNC MP3";

    // Media Session API
    if ('mediaSession' in navigator) {
        let coverSrc = window.customCover || "mp3fav.png";

        navigator.mediaSession.metadata = new MediaMetadata({
            title: title,
            artist: "portoSYNC MP3",
            album: "portoSYNC",
            artwork: [
                { src: coverSrc, sizes: "512x512", type: "image/png" }
            ]
        });

        // Control complet
        navigator.mediaSession.setActionHandler('play', togglePlay);
        navigator.mediaSession.setActionHandler('pause', togglePlay);

        // Next / Prev
        navigator.mediaSession.setActionHandler('nexttrack', () => {
            next();
        });
        navigator.mediaSession.setActionHandler('previoustrack', () => {
            prev();
        });

        // Seekbackward → reset piesa
        navigator.mediaSession.setActionHandler('seekbackward', (details) => {
            audio.currentTime = 0;
        });

        // Seekforward → sare la final (opțional)
        navigator.mediaSession.setActionHandler('seekforward', (details) => {
            audio.currentTime = audio.duration;
        });

        // Seek exact (unele device-uri suportă)
        navigator.mediaSession.setActionHandler('seekto', (details) => {
            if(details.fastSeek && 'fastSeek' in audio){
                audio.fastSeek(details.seekTime);
            } else {
                audio.currentTime = details.seekTime;
            }
        });
    }
}

// Funcții next / prev pentru lista de melodii
function next(){
    current++;
    if(current >= songs.length) current = 0; // loop la început
    playSong(current);
}

function prev(){
    current--;
    if(current < 0) current = songs.length - 1; // loop la final
    playSong(current);
}

function togglePlay(){
    if(audio.paused){ audio.play(); } else { audio.pause(); }
}

// La refresh, pornește prima melodie și aplică coverul salvat
if(songs.length > 0) playSong(0);
</script>

</body>
</html>