const questionScreen = document.getElementById("questionScreen");
const inviteScreen = document.getElementById("inviteScreen");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const replayBtn = document.getElementById("replayBtn");
const heartLayer = document.getElementById("heartLayer");
const hint = document.getElementById("hint");

function showInvitation() {
  questionScreen.classList.remove("active");
  inviteScreen.classList.add("active");
  startHearts();
}

yesBtn.addEventListener("click", showInvitation);

function moveNoButton() {
  const margin = 18;
  const maxX = Math.max(margin, window.innerWidth - noBtn.offsetWidth - margin);
  const maxY = Math.max(margin, window.innerHeight - noBtn.offsetHeight - margin);
  noBtn.classList.add("running");
  noBtn.style.left = `${margin + Math.random() * (maxX - margin)}px`;
  noBtn.style.top = `${margin + Math.random() * (maxY - margin)}px`;
  hint.textContent = "Oops… the “No” button is playing hide-and-seek! ♡";
}
noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("pointerdown", (event) => {
  event.preventDefault();
  moveNoButton();
});
noBtn.addEventListener("focus", moveNoButton);

replayBtn.addEventListener("click", () => {
  inviteScreen.classList.remove("active");
  questionScreen.classList.add("active");
  noBtn.classList.remove("running");
  noBtn.style.left = "";
  noBtn.style.top = "";
  hint.textContent = "Choose your answer… if you can catch the “No” 😉";
});

let heartTimer;
function createHeart() {
  const heart = document.createElement("span");
  heart.className = "floating-heart";
  heart.textContent = Math.random() > .5 ? "♡" : "♥";
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${12 + Math.random() * 24}px`;
  heart.style.animationDuration = `${6 + Math.random() * 6}s`;
  heartLayer.appendChild(heart);
  setTimeout(() => heart.remove(), 12500);
}
function startHearts() {
  if (heartTimer) clearInterval(heartTimer);
  for (let i = 0; i < 12; i++) setTimeout(createHeart, i * 180);
  heartTimer = setInterval(createHeart, 420);
}
