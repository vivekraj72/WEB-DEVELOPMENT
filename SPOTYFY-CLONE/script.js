console.log("my name is vivek roy");

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('master-play');
let progressBar = document.getElementById('my-progress-bar');
let gif = document.getElementById('gif-logo');
let masterSongName = Array.from(document.getElementsByClassName('songName'));
let currentSong = document.getElementById('current-song');

let songs = [
{songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "images/1.jpg"},
{songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "images/2.jpg"},
{songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "images/3.jpg"},
{songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "images/4.jpg"},
{songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "images/5.jpg"},
{songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "images/6.jpg"},
{songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "images/7.jpg"},
{songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "images/8.jpg"},
{songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "images/9.jpg"},
{songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "images/10.jpg"},
];



masterPlay.addEventListener("click" ,() =>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

    }

});


audioElement.addEventListener('timeupdate', ()=>{
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value = progress; 
});


progressBar.addEventListener("change", ()=>{
    audioElement.currentTime = (progressBar.value*audioElement.duration)/100;
});

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})


document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
