const container = document.querySelector(".container");
const unsplashURL = "https://source.unsplash.com/random/";
let row = 5;

for (let i = 0; i < row * 3; i++) {
  const img = document.createElement("img");
  img.src = `${unsplashURL}${getSize()}`;
  container.appendChild(img);
}

function getSize() {
  return `${getRandomNumber()}x${getRandomNumber()}`;
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10 + 300);
}
