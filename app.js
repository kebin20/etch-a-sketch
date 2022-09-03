let color = 'black';

function populateBoard(size) {
let grid = document.querySelector('.grid-container');
let newSquares = grid.querySelectorAll('div');

//To change the size of the board
// newSquares.forEach((div) => div.remove());(NOT sure about this?? )
grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

let amount = size*size;
for (let i = 0; i < amount; i++) {
    let newSquares = document.createElement('div');
    // grid.appendChild(newSquares); Why is this not needed to work??
    newSquares.classList.add('addColor');

newSquares.addEventListener('mouseover', colorSquare);

    newSquares.style.backgroundColor = 'white';
    grid.insertAdjacentElement("beforeend", newSquares)
  };
}

populateBoard(16);


function changeSize(input) {
    if(input >= 2 && input <= 100 ) {
        populateBoard(input);
    } else {
        alert("Please enter valid size");
    }
 
}

function colorSquare() {
        this.style.backgroundColor = color;
}



function changeColor() {

}

// grid.addEventListener('mouseover', makeRandColor);
// function makeRandColor(e) {
//   let newColor = e.target;
//   const r = Math.floor(Math.random()*255);
//   const g = Math.floor(Math.random()*255);
//   const b = Math.floor(Math.random()*255);
//   return newColor.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
// }