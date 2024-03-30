/* "TIL" mentions are meant to document things I learned along the way. */

console.log("js-etch-a-sketch V0.1.0\n\nCopyright © Gabriel Drouin 2024\n")

// Global variables
const slider = document.getElementById("gridSlider");
const output = document.getElementById("gridValue");

// Create the initial board
document.addEventListener("DOMContentLoaded", (event) => {
    let defaultValue = slider.defaultValue;
    createBoard(defaultValue);
    console.log(event);
});

/* TIL: Arrow functions do not have their 'this' or 'arguments' and need their
parameters to be explicitely declared like above. In contrast, a regular function
as an event handler with addEventListener passes the event object automatically
as the first parameter to the function when the event occurs, like so:

document.addEventListener("DOMContentLoaded", function() {
    console.log(event);
}); */



// Display the slider value 
output.innerHTML = slider.value; // Display the default slider value

slider.oninput = () => {
    output.innerHTML = slider.value;
}

/* TIL: the 'this' keyword in an arrow function is determined by
the surrounding code when the function is created, not when it is called.
So in this context, we can only use 'this' with a regular function like so:

slider.oninput = function() {
  output.innerHTML = this.value;
} */

// createBoard function
function createBoard(size) {
    let board = document.querySelector(".board");
    
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for (let i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        div.style.borderStyle = "solid";
        div.style.borderWidth = "1px";
        div.style.borderColor = "lightgray";
        board.insertAdjacentElement("beforeend", div);
    }
}




