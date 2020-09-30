import { SNAKE_SPEED, update as updateSnake, draw as drawSnake } from "./snake";

let lasrRenderTime = 0;

const main = (currentTime) => {
  const secondsSinceLastRender = (currentTime - lasrRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

  window.requestAnimationFrame(main);
  lasrRenderTime = currentTime;

  update();
  draw();
};

window.requestAnimationFrame(main);

function update() {
  updateSnake();
}
function draw() {
  drawSnake();
}
