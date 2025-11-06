let audio = new Audio("paw.mp3");
audio.loop = true;

function playMusic() {
  audio.play().catch(() => {});
}
