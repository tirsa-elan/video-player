const video = document.getElementById("video");
const play = document.getElementById("pause-play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timer = document.getElementById("time");
function palyPueseVideo() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function playpuesedIconSetting() {
  if (video.paused) {
    play.innerHTML = "<i class='bi bi-google-play' id='pause-play'></i>";
  } else {
    play.innerHTML = "<i class='bi bi-pause-fill'  id='pause-play'></i>";
  }
}

function stopvideo() {
  video.pause();
  video.currentTime = 0;
}

function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  // دقیقه
  let mins = Math.floor(video.currentTime / 60);
  if (mins < video.duration) {
    mins = "0" + String(mins);
  }

  //ثانیه
  let secs = Math.floor(video.currentTime % 60);
  if (secs < video.duration) {
    secs = "0" + String(secs);
  }

  timer.innerHTML = `${mins}:${secs}`;
}



video.addEventListener("click", palyPueseVideo);
video.addEventListener("pause", playpuesedIconSetting);
video.addEventListener("play", playpuesedIconSetting);
video.addEventListener("timeupdate", updateProgress);//*

play.addEventListener("click", palyPueseVideo);
play.addEventListener("click", playpuesedIconSetting);
stop.addEventListener("click", stopvideo);
