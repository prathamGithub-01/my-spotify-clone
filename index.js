var audio1 = new Audio("songs/1.mp3");
var audio2 = new Audio("songs/1.mp3");
let currentSongIndex = 0;
console.log("hello");
var masterPlay = document.getElementById("masterPlay");
var myprogress = document.getElementById("myprogress");
var timebar = document.getElementsByClassName("play-duration");
var playButtons = document.getElementsByClassName("btn");
var songItem= document.getElementsByClassName("song-item");
var prevSong=document.querySelector(".back");
var nextSong=document.querySelector(".forward");
var displaySong=document.querySelector(".songName");
let songs = [
  {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
  {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
  {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
  {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
  {songName: "Janji-Heroes-Tonight", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
  {songName: "Inside You-LemonmusicsStdio", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
  {songName: "Sheet Of Paper-agerbeatz", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
  {songName: "G.O.T- FT calvinlone-14 MADE  ", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
  {songName: "inspiring-emotional-cinematic-piano", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
  {songName: "celebration-xmas", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
]
var temp=0;
var gif = document.getElementById("gif");
masterPlay.addEventListener("click", () => {
  console.log("svg clicked");
  if (audio1.paused || audio1.currentTime <= 0) {
    
    playSong(currentSongIndex);
  }
   
  else {
  pauseSong();
  }
});
function pauseSong() {
  audio1.pause();
  masterPlay.classList.remove("fa-circle-pause");
  masterPlay.classList.add("fa-circle-play");
  gif.style.opacity = 0;
}

function playSong(index) {
  audio1.src = songs[index].filePath;
  displaySong.textContent = songs[index].songName;
  audio1.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
  
  gif.style.opacity = 1;
}
audio1.addEventListener("timeupdate", () => {
  var percentMusicPlayed = (audio1.currentTime / audio1.duration) * 100;
  myprogress.value = percentMusicPlayed;
});
myprogress.addEventListener("change", () => {event.target.classList.remove("fa-circle-play");
      event.target.classList.add("fa-circle-pause");
  audio1.currentTime = (myprogress.value * audio1.duration) / 100;
});

Array.from(document.getElementsByClassName("btn")).forEach((playButton, index) => {
  playButton.addEventListener("click", (event) => {
    currentSongIndex = index; // Update the current song index
    if (audio1.paused || audio1.currentTime <= 0) {
      playSong(currentSongIndex);
      event.target.classList.remove("fa-circle-play");
      event.target.classList.add("fa-circle-pause");
    } else {
      pauseSong();
      event.target.classList.remove("fa-circle-pause");
      event.target.classList.add("fa-circle-play");
    }
  });
});

  
prevSong.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length; // Loop to last song if at start
  playSong(currentSongIndex);
});

// Next song button functionality
nextSong.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length; // Loop to first song if at end
  playSong(currentSongIndex);
});
// future context

// Array.from(playButtons).forEach(button => {
//   button.addEventListener('click', function() {
//     const songItem = this.closest('.song-item');
//     const duration = parseInt(songItem.getAttribute('data-duration'));
//     console.log(duration); // Get the duration in seconds
//     const playDurationSpan = songItem.querySelector('.play-duration');
    
//     let currentTime = 0;

//     // Update the play duration every second
//     const interval = setInterval(() => {
//       if (currentTime < duration) {
//         currentTime++;
//         playDurationSpan.textContent = formatTime(currentTime);
//       } else {
//         clearInterval(interval); // Stop when the duration is reached
//       }
//     }, 1000); // Update every second
//   });
// });
// function formatTime(seconds) {
//   const minutes = Math.floor(seconds / 60);
//   const secs = seconds % 60;

//   return `${minutes <10 ?  '0' + minutes:minutes}:${secs < 10 ?  '0' + secs:secs}`;
// }