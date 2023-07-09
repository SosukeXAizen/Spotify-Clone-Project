console.log("welcome");
let songindex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let MyProgressBar = document.getElementById("MyProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let songs = [
  {
    songName: "Diavolo Theme",
    filePath: "songs/1.mp3",
    coverPath: "covers/Screen Shot 2023-07-06 at 3.08.52 PM.png",
  },
  {
    songName: "Akatsuki Theme",
    filePath: "songs/.mp3",
    coverPath: "covers/Screen Shot 2023-07-07 at 2.15.27 PM.png",
  },
  {
    songName: "Ultra Instinct Theme",
    filePath: "songs/3.mp3",
    coverPath: "covers/Screen Shot 2023-07-07 at 2.24.14 PM.png",
  },
  { songName: "White Tee", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
  { songName: "Afterdark", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
  {
    songName: "Close Eyes",
    filePath: "songs/6.mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songName: "Patrick Bateman",
    filePath: "songs/7.mp3",
    coverPath: "covers/7.jpg",
  },
  {
    songName: "Metamorphosis",
    filePath: "songs/8.mp3",
    coverPath: "covers/8.jpg",
  },
  {
    songName: "Its About Drive",
    filePath: "songs/9.mp3",
    coverPath: "covers/9.jpg",
  },
  {
    songName: "Rick Roll",
    filePath: "songs/10.mp3",
    coverPath: "covers/10.jpg",
  },
];
songItems.forEach((element, i) => {
  element.getElementByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
});

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});
audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  MyProgressBar.value = progress;
});

MyProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (MyProgressBar.value * audioElement.duration) / 100;
});
const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-circle-pause");
      element.classList.add("fa-circle-play");
    }
  );
};
Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays(); 
      songindex = parseInt(e.target.id);
      e.target.classList.remove("fa-circle-play");
      e.target.classList.add("fa-circle-pause");
      audioElement.src = `songs/${songindex}.mp3`;
      masterSongName.innerText = songs[songindex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
    });
  }
);
document.getElementById("next").addEventListener("click", () => {
  if (songindex>=10) {
    songindex = 0;
  }
  else {
 songindex += 1;
  }
  
  audioElement.src = `songs/${songindex}.mp3`;
  masterSongName.innerText = songs[songindex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});
document.getElementById("previous").addEventListener("click", () => {
  if (songindex<=0) {
    songindex = 0;
  }
  else {
 songindex -= 1;
  }
  audioElement.src = `songs/${songindex}.mp3`;
  masterSongName.innerText = songs[songindex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});
