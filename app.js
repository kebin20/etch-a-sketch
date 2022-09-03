function populateBoard(size) {
let grid = document.querySelector('.grid-container');
//To change the size of the board
grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

for (let i = 0; i < 256; i++) {
    let newDiv = document.createElement('div');
    grid.appendChild(newDiv);
    newDiv.classList.add('addColor');
  };
}

populateBoard(16);

function changeSize(input) {
    populateBoard(input);
}

grid.addEventListener('mouseover', makeRandColor);

function makeRandColor(e) {
  let newColor = event.target;
  const r = Math.floor(Math.random()*255);
  const g = Math.floor(Math.random()*255);
  const b = Math.floor(Math.random()*255);
  return newColor.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

// function changeSize() {
//   let size = prompt("Please choose your canvas size");
//   if (size != null) {
//     const userInput = e.value;
    
//   }
// };

// change.addEventListener('click', changesize);
