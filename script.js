const container = document.querySelector(".container");
let totalSquares = 16 * 16;
for(let i = 0 ; i < totalSquares; i++){
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);

}

container.addEventListener('mouseover', (event) => {
    if(event.target.classList.contains("square")){
        console.log(event.target);
        event.target.style.backgroundColor = 'black';
    }
})