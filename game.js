import {
  SNAKE_SPEED,
  update as updateSnake,
  draw as drawSnake,
} from "./snake.js";
import { update as updateFood, draw as drawFood } from "./food.js";

let lasrRenderTime = 0;
const gameBoard = document.getElementById("game-board");
function main(currentTime) {
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lasrRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

  lasrRenderTime = currentTime;

  console.log("main");
  update();
  draw();
}

window.requestAnimationFrame(main);

function update() {
  console.log("update");
  updateSnake();
  updateFood();
}
function draw() {
  console.log("draw");
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
}
