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
    const square = event.target;
    if (!square.classList.contains("square")) return;

    let hits = Number(square.dataset.hits) || 0;
    if (hits >= 10) return;               // already fully opaque

    if (hits === 0) {
        square.style.backgroundColor = getRandomColor();   // color only on first hover
    }

    hits++;
    square.dataset.hits = hits;
    square.style.opacity = hits / 10;     // 0.1, 0.2 ... 1
});

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

function getRandomColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    let rgb = `rgb(${r}, ${g}, ${b})`;
    return rgb;
}

