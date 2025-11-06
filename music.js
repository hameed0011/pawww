let audio = new Audio("song.mp3");
audio.loop = true;

function playMusic() {
  audio.play().catch(() => {});
}
