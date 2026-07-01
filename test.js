// =============================
// INIT
// =============================

document.addEventListener("DOMContentLoaded", () => {

  // Protectie inspect
  document.addEventListener("keydown", (e) => {
    if (
      e.key === "F12" ||
      (e.ctrlKey && e.shiftKey && ["I","J","C"].includes(e.key.toUpperCase())) ||
      (e.ctrlKey && e.key === "U")
    ) {
      e.preventDefault();
      alert("Acces interzis!");
    }
  });

  document.addEventListener("contextmenu", (e) => e.preventDefault());

});

// =============================
// DOM ELEMENTS
// =============================

const loginPage = document.getElementById("loginPage");
const loginBtn = document.getElementById("loginBtn");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginError = document.getElementById("loginError");

const app = document.getElementById("app");

const userIcon = document.getElementById("userIcon");
const userNameDisplay = document.getElementById("userName");

const userMenu = document.getElementById("userMenu");
const dropdownMenu = document.getElementById("dropdownMenu");
const logoutBtn = document.getElementById("logoutBtn");

const searchInput = document.getElementById("search");
const channelList = document.getElementById("channelList");

const playerVideo = document.getElementById("playerVideo");
const playerAudio = document.getElementById("playerAudio");

const channelDescription = document.getElementById("channelDescription");

// =============================
// GLOBAL VARIABLES
// =============================

let users = [];
let usersLoaded = false;

let currentUser = null;

let currentHls = null;

let retryCount = 0;
const maxRetries = 5;

let selectedChannel = null;

// =============================
// LOAD USERS
// =============================

fetch("oldusers.json")
  .then(res => res.json())
  .then(data => {
    users = data;
    usersLoaded = true;
  })
  .catch(err => {
    console.error("Nu s-au putut încărca utilizatorii:", err);
  });

// =============================
// LOGIN
// =============================

loginBtn.addEventListener("click", () => {

  if(!usersLoaded){
    alert("Se încarcă utilizatorii...");
    return;
  }

  const username = usernameInput.value.trim();
  const password = passwordInput.value;

  const user = users.find(u =>
    u.username === username &&
    String(u.password) === String(password)
  );

  if(user){

    currentUser = user;

    localStorage.setItem("currentUser", JSON.stringify(user));

    loginPage.style.display = "none";
    app.style.display = "flex";

    userNameDisplay.textContent = user.displayName;

    if(user.avatar){
      userIcon.innerHTML =
        `<img src="${user.avatar}" style="width:40px;height:40px;border-radius:50%;object-fit:cover;">`;
    } else {
      userIcon.textContent =
        user.username.charAt(0).toUpperCase();
    }

    renderChannels(channels);
    loginError.style.display = "none";

  } else {
    loginError.style.display = "block";
  }

});

// =============================
// AUTO LOGIN
// =============================

document.addEventListener("DOMContentLoaded", () => {

  const savedUser = localStorage.getItem("currentUser");

  if(savedUser){

    currentUser = JSON.parse(savedUser);

    loginPage.style.display = "none";
    app.style.display = "flex";

    userNameDisplay.textContent = currentUser.displayName;

    if(currentUser.avatar){
      userIcon.innerHTML =
        `<img src="${currentUser.avatar}" style="width:40px;height:40px;border-radius:50%;object-fit:cover;">`;
    } else {
      userIcon.textContent =
        currentUser.username.charAt(0).toUpperCase();
    }

    renderChannels(channels);
  }

});

// =============================
// LOGOUT
// =============================

logoutBtn.addEventListener("click", () => {

  currentUser = null;
  localStorage.removeItem("currentUser");

  clearPlayer();

  app.style.display = "none";
  loginPage.style.display = "flex";

  usernameInput.value = "";
  passwordInput.value = "";

});

// =============================
// DROPDOWN USER MENU
// =============================

userMenu.addEventListener("click", (e) => {

  e.stopPropagation();

  dropdownMenu.style.display =
    dropdownMenu.style.display === "flex"
      ? "none"
      : "flex";

});

document.addEventListener("click", (e) => {

  if(!userMenu.contains(e.target) &&
     !dropdownMenu.contains(e.target)){
    dropdownMenu.style.display = "none";
  }

});

// =============================
// SEARCH CHANNEL
// =============================

searchInput.addEventListener("input", () => {

  const term = searchInput.value.toLowerCase();

  const filtered = channels.filter(ch =>
    ch.name &&
    ch.name.toLowerCase().includes(term)
  );

  renderChannels(filtered);

});

// =============================
// RENDER CHANNEL LIST
// =============================

function renderChannels(channelArray){

  channelList.innerHTML = "";

  if(channelArray.length === 0){
    channelList.innerHTML =
      `<p style="color:#fff;text-align:center;">
      Canalul tău căutat nu există
      </p>`;
    return;
  }

  channelArray.forEach(ch => {

    const div = document.createElement("div");
    div.classList.add("channel");

    div.innerHTML = `
      <div class="channel-info">
        <div class="channel-name">${ch.name}</div>
        <div class="channel-theme">${ch.theme || ""}</div>
      </div>
      <div class="channel-id">${ch.id}</div>
    `;

    div.addEventListener("click", () => {
      if(ch.name) handleChannelClick(ch);
    });

    channelList.appendChild(div);

  });

}

// =============================
// CHANNEL CLICK
// =============================

function handleChannelClick(channel){

  if(channel.password){

    selectedChannel = channel;

    document.getElementById("channelPasswordInput").value = "";
    document.getElementById("passwordModal").style.display = "flex";

  } else {
    playChannel(channel);
  }

}

// =============================
// NOTIFICATION
// =============================

async function showNowPlayingNotification(channel){

  if(!("Notification" in window)) return;

  if(Notification.permission !== "granted"){
    await Notification.requestPermission();
  }

  if(Notification.permission !== "granted") return;

  navigator.serviceWorker.ready.then(reg => {
    reg.showNotification(channel.name || "Canal necunoscut",{
      body:"portoSYNC",
      icon:"PortoSyncfav.png",
      tag:"now-playing"
    });
  });

}

// =============================
// PLAY CHANNEL
// =============================

function playChannel(channel){

  clearPlayer();

  retryCount = 0;

  document.querySelector(".player-section").style.display = "flex";

  channelDescription.textContent =
    channel.description || "";

  const url = channel.streamUrl.toLowerCase();

  const showFallback = () => {

    playerVideo.loop = true;
    playerVideo.src = "syncpauza.mp4";

    playerVideo.style.display = "block";
    playerAudio.style.display = "none";

    playerVideo.play().catch(()=>{});
  };

  const tryReconnect = () => {

    if(retryCount >= maxRetries) return;

    retryCount++;

    setTimeout(() => {

      fetch(channel.streamUrl,{method:"HEAD"})
      .then(res => {
        if(res.ok) playChannel(channel);
      })
      .catch(()=>{});

    },3000);

  };

  if(channel.type === "video"){

    playerAudio.pause();
    playerAudio.style.display = "none";
    playerVideo.style.display = "block";

    if(url.endsWith(".mp4")){

      if(currentHls){
        currentHls.destroy();
        currentHls = null;
      }

      playerVideo.loop = false;
      playerVideo.src = channel.streamUrl;

      playerVideo.play().catch(showFallback);
    }

    else if(url.includes(".m3u8")){

      if(Hls.isSupported()){

        if(currentHls) currentHls.destroy();

        currentHls = new Hls();
        currentHls.loadSource(channel.streamUrl);
        currentHls.attachMedia(playerVideo);

        currentHls.on(Hls.Events.MANIFEST_PARSED, () => {
          playerVideo.loop = false;
          playerVideo.play().catch(showFallback);
        });

        currentHls.on(Hls.Events.ERROR, (event,data)=>{

          if(data.fatal){
            currentHls.destroy();
            currentHls = null;

            showFallback();
            tryReconnect();
          }

        });

      } else if(playerVideo.canPlayType("application/vnd.apple.mpegurl")){

        playerVideo.loop = false;
        playerVideo.src = channel.streamUrl;

        playerVideo.addEventListener("loadedmetadata", ()=>playerVideo.play(), {once:true});
      }

    }

  }

  else if(channel.type === "audio"){

    playerVideo.pause();
    playerVideo.style.display = "none";

    if(currentHls){
      currentHls.destroy();
      currentHls = null;
    }

    playerAudio.style.display = "block";
    playerAudio.src = channel.streamUrl;

    playerAudio.play().catch(()=>{

      playerAudio.style.display = "none";

      channelDescription.textContent =
        "Acest conținut nu poate fi redat.";

    });

  }

  if("mediaSession" in navigator){

    navigator.mediaSession.metadata =
      new MediaMetadata({
        title: channel.name,
        artist: "portoSYNC",
        album: "portoSYNC",
        artwork:[{
          src:"PortoSyncfav.png",
          sizes:"512x512",
          type:"image/png"
        }]
      });

  }

  showNowPlayingNotification(channel);

}

// =============================
// CLEAR PLAYER
// =============================

function clearPlayer(){

  const player = document.querySelector(".player-section");

  if(currentHls){
    currentHls.destroy();
    currentHls = null;
  }

  playerVideo.pause();
  playerVideo.src = "";
  playerVideo.loop = false;
  playerVideo.style.display = "none";

  playerAudio.pause();
  playerAudio.src = "";
  playerAudio.style.display = "none";

  channelDescription.textContent = "";
  player.style.display = "none";

}

// =============================
// PASSWORD CONFIRM
// =============================

document.getElementById("submitChannelPassword")
.addEventListener("click", () => {

  if(!selectedChannel) return;

  const pass =
    document.getElementById("channelPasswordInput").value.trim();

  if(pass === String(selectedChannel.password)){

    document.getElementById("passwordModal").style.display = "none";
    playChannel(selectedChannel);

  }

});