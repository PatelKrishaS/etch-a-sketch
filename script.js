const container = document.querySelector(".container");
const btn = document.querySelector("#new-grid-btn");

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
    if (hits >= 10) return;

    if (hits === 0) {
        const { r, g, b } = getRandomRGB();
        square.dataset.r = r;
        square.dataset.g = g;
        square.dataset.b = b;
    }

    hits++;
    square.dataset.hits = hits;
    square.style.backgroundColor =
        `rgba(${square.dataset.r}, ${square.dataset.g}, ${square.dataset.b}, ${hits / 10})`;
});


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

function getRandomRGB() {
    return {
        r: Math.floor(Math.random() * 256),
        g: Math.floor(Math.random() * 256),
        b: Math.floor(Math.random() * 256),
    };
}

