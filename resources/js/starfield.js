window.requestAnimFrame = (function () {
  return window.requestAnimationFrame;
})();
let canvas = document.getElementById("starfield");
let c = canvas.getContext("2d");

var animate = true;

const depth = 1000;
const numStars = 2500;
const focalLength = canvas.width * 2;

let stars = [];
let centerX, centerY;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initializeStars();
}

function initializeStars() {
  centerX = canvas.width / 2;
  centerY = canvas.height / 2;

  stars = [];
  for (let i = 0; i < numStars; i++) {
    let star = {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: Math.random() * depth,
      o: 1, //"0." + Math.floor(Math.random() * 10) + 90,
    };
    stars.push(star);
  }
}

function drawStars() {
  let pixelX, pixelY, pixelRadius;

  // Background
  c.fillStyle = "rgba(10,20,30,1)";
  c.fillRect(0, 0, canvas.width, canvas.height);

  // Stars
  for (i = 0; i < numStars; i++) {
    let star = stars[i];

    // Move Star
    star.z -= 1;
    if (star.z <= 0) {
      star.z = depth;
    }

    pixelX = (star.x - centerX) * (focalLength / star.z);
    pixelX += centerX;
    pixelY = (star.y - centerY) * (focalLength / star.z);
    pixelY += centerY;
    pixelRadius = 1 * (focalLength / star.z);

    // Draw Star
    c.fillStyle = `rgba(200, 255, 255, ${star.o})`;
    c.fillRect(pixelX, pixelY, pixelRadius, pixelRadius);
  }
}

function executeFrame() {
  // Animate
  if (animate) {
    requestAnimFrame(executeFrame);
    drawStars();
  }
}

window.addEventListener("resize", resizeCanvas, false);
resizeCanvas();
executeFrame();
