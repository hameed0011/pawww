const emojis = ["💛","💙","💜","💚","❤️","✨","🌸","😊","🥺"];

function createEmoji() {
  const emoji = document.createElement("div");
  emoji.className = "emoji";
  emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];

  emoji.style.left = Math.random() * 100 + "vw";
  emoji.style.animationDuration = 3 + Math.random() * 3 + "s";

  document.body.appendChild(emoji);

  setTimeout(() => emoji.remove(), 6000);
}

setInterval(createEmoji, 300);
