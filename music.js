// Emoji flowers + symbolic flowers (color-changable)
const emojis = [
  "🌸","🌼","🌺","🌻","🌷","💐","🌹",
  "✿","❀","✾","✽"
];

// Colors ONLY for symbolic flowers
const colors = [
  "#ff6b6b", "#f06595", "#cc5de8", "#845ef7",
  "#5c7cfa", "#339af0", "#22b8cf", "#20c997",
  "#51cf66", "#94d82d", "#fcc419", "#ff922b"
];

function createEmoji() {
  const emoji = document.createElement("div");
  emoji.className = "emoji";

  let symbol = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.innerText = symbol;

  // random position + size
  emoji.style.left = Math.random() * 100 + "vw";
  emoji.style.fontSize = (25 + Math.random() * 20) + "px";
  emoji.style.animationDuration = 3 + Math.random() * 3 + "s";

  // If it's a symbol flower, color it
  if (["✿","❀","✾","✽"].includes(symbol)) {
    emoji.style.color = colors[Math.floor(Math.random() * colors.length)];
  }

  document.body.appendChild(emoji);

  setTimeout(() => emoji.remove(), 6000);
}

setInterval(createEmoji, 250);
