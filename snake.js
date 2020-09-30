import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 5;
const snakeBody = [{ x: 11, y: 11 }];
let newSegments = 0;

export function update() {
  addSegments();
  const inputDirectrion = getInputDirection();
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }

  snakeBody[0].x += inputDirectrion.x;
  snakeBody[0].y += inputDirectrion.y;
}
export function draw(gameBoard) {
  snakeBody.forEach((segment) => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add("snake");
    gameBoard.appendChild(snakeElement);
  });
}

export function expandSnake(amount) {
  newSegments += amount;
}

export function onSnake(position) {
  return snakeBody.some((segment) => {
    return equalPositions(segment, position);
  });
}

function equalPositions(segment, position) {
  return segment.x === position.x && segment.y === position.y;
}

function addSegments() {
  for (let i = 0; i < newSegments; i++) {
    snakeBody[snakeBody.length] = { ...snakeBody[snakeBody.length - 1] };
  }

  newSegments = 0;
}
