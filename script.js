const container = document.querySelector(".container");

function createGrid(size){
    container.innerHTML = "";
    let totalSquares = size * size;
    for(let i = 0 ; i < totalSquares; i++){
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.flexBasis = `${100 / size}%`;
        container.appendChild(square);

    }
}

container.addEventListener('mouseover', (event) => {
    if(event.target.classList.contains("square")){
        event.target.style.backgroundColor = 'black';
    }
})

const btn = document.querySelector("#new-grid-btn");

btn.addEventListener('click', () => {
    const raw = prompt("Enter the number of squares per side (Max: 100): ");
    if (raw === null) return;

    const input = Number(raw);

     if (!Number.isInteger(input) || input < 1 || input > 100) {
        alert("Enter a whole number from 1 to 100.");
        return;
    }
    createGrid(input);
});

createGrid(16);

