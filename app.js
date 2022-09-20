let color = "black";
let click = true;
const mode = document.querySelector(".mode")

function populateBoard(size) {
  let grid = document.querySelector(".grid-container");
  let newSquares = grid.querySelectorAll("div");
  //To change the size of the board
  newSquares.forEach((div) => div.remove());
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let newSquares = document.createElement("div");
    // grid.appendChild(newSquares); Why is this not needed to work??
    newSquares.classList.add("addColor");

    newSquares.addEventListener("mouseover", colorSquare);

    newSquares.style.backgroundColor = "white";
    grid.insertAdjacentElement("beforeend", newSquares);
  }
}

populateBoard(16);

function changeSize(input) {
  if (input >= 2 && input <= 30) {
    populateBoard(input);
  } else {
    alert("Please enter valid size");
  }
}

function colorSquare() {
  if (color === "random") {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return (this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`);
  } else {
    this.style.backgroundColor = color;
  }
}

function changeColor(choice) {
  color = choice;
  mode.textContent = `Mode: ${choice}`
}

function resetBoard() {
  let grid = document.querySelector(".grid-container");
  let newSquares = grid.querySelectorAll("div");
  newSquares.forEach((div) => (div.style.backgroundColor = "white"));
}

document.querySelector("body").addEventListener("click", () => {
  click = !click;
});
