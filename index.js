const plpa = document.querySelector('#plpa');
const prev = document.querySelector('.fa-backward');
const next = document.querySelector('.fa-forward');
const audio = document.querySelector('audio');
const source = document.querySelector('source');
const img = document.querySelector('img');
const h4 = document.querySelector('h4');
const volume = document.querySelector('.slider');
const progress = document.querySelector('.progress');
const span = document.querySelector('span');


const playlist = [
    {
        id: 1,
        songName: "All I Need",
        songTrack: "./assets/All-I-Need.mp3",
        songImg: "./images/All-I-Need.jpg"
    },
    {
        id: 2,
        songName: "Hold On",
        songTrack: "./assets/Hold-On.mp3",
        songImg: "./images/Hold-On.jpg"
    },
    {
        id: 3,
        songName: "Hunger",
        songTrack: "./assets/Hunger.mp3",
        songImg: "./images/Hunger.jpg"
    },
    {
        id: 5,
        songName: "Never Say Never",
        songTrack: "./assets/Never-Say-Never.mp3",
        songImg: "./images/Never-Say-Never.jpg"
    },
    {
        id: 5,
        songName: "Thousand Years",
        songTrack: "./assets/Thousand-Years.mp3",
        songImg: "./images/Thousand-Years.jpg"
    }
]

let randomTrack = Math.floor(Math.random() * playlist.length + 1);

progress.addEventListener('change', () => {
    audio.currentTime = progress.value * audio.duration / 100;
})

audio.addEventListener('timeupdate', () => {
    progress.value = audio.currentTime * 100 / audio.duration;
    span.textContent = String(audio.currentTime / 60).slice(0, 4);
})

volume.addEventListener('change', () => {
    audio.volume = volume.value;
})

prev.addEventListener('click', () => {
    if (randomTrack === 0) {
        randomTrack = playlist.length - 1;
    }
    else {
        randomTrack -= 1;
    }
    load(playlist[randomTrack]);
})

audio.addEventListener('ended', () => {
    if (randomTrack === playlist.length - 1) {
        randomTrack = 0;
    }
    else {
        randomTrack += 1;
    }
    load(playlist[randomTrack]);
})

next.addEventListener('click', () => {
    if (randomTrack === playlist.length - 1) {
        randomTrack = 0;
    }
    else {
        randomTrack += 1;
    }
    load(playlist[randomTrack]);
})

plpa.addEventListener('click', () => {
    audio.load();
    if (plpa.classList.contains('fa-play')) {
        plpa.classList.replace('fa-play', 'fa-pause');
        audio.play()
    } else {
        plpa.classList.replace('fa-pause', 'fa-play');
        audio.pause()
    }
})

function load(pl) {
    source.src = pl.songTrack;
    img.src = pl.songImg;
    h4.textContent = pl.songName;
    audio.load();
    plpa.classList.contains('fa-play') ? audio.pause() : audio.play();
}

load(playlist[randomTrack])
