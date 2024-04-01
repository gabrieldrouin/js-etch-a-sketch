console.log("js-etch-a-sketch V1.1.0\n\nCopyright © Gabriel Drouin 2024\n")

// Global variables
const slider = document.getElementById("gridSlider");
const output = document.getElementById("gridValue");
let gridColor = "black";
let boardSize = slider.defaultValue;

// Create initial board
document.addEventListener("DOMContentLoaded", (event) => {
    createBoard(boardSize);
    console.log(event);
});

// Display slider value 
output.innerHTML = slider.value;
slider.oninput = () => {
    output.innerHTML = slider.value;
}

// Buttons //

// Change board size
const gridButton = document.querySelector("#gridButton")
gridButton.addEventListener("click", () => {
    boardSize = slider.value;
    createBoard(boardSize);
});

// Change board color to black
const blackButton = document.querySelector("#blackButton")
blackButton.addEventListener("click", () => {
    gridColor = "black";
    createBoard(boardSize);
});

// Change board color to RGB
const rgbButton = document.querySelector("#rgbButton")
rgbButton.addEventListener("click", () => {
    gridColor = "rgb";
    createBoard(boardSize);
});

// Functions //

function createBoard(size) {
    let board = document.querySelector(".board");

    while (board.firstChild) {
        board.removeChild(board.lastChild);
    }

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for (let i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", setColor);
        board.insertAdjacentElement("beforeend", div);
    }
}

function setColor() {
    switch (gridColor) {
    case "black":
        this.style.backgroundColor = "black";
        this.style.borderColor = "#303030";
        break;
    case "rgb":
        if (!this.style.backgroundColor) {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        this.style.borderWidth = "0px";
        }
        break;
    default:
        break;
    }
}

