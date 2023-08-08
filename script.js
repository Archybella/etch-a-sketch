const container = document.getElementById("container");
const resetButton = document.getElementById("reset-button");

function createGrid(size) {
    container.innerHTML = "";
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("grid-square");
        container.appendChild(square);

        square.addEventListener("mouseover", () => {
            const red = Math.floor(Math.random() * 256);
            const green = Math.floor(Math.random() * 256);
            const blue = Math.floor(Math.random() * 256);
            square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

            const currentOpacity = parseFloat(square.style.opacity) || 0;
            if (currentOpacity < 1) {
                square.style.opacity = currentOpacity + 0.1;
            }
        });
    }
}

resetButton.addEventListener("click", () => {
    const newSize = prompt("Enter the number of squares per side (max 100):");
    const parsedSize = parseInt(newSize);

    if (!isNaN(parsedSize) && parsedSize > 0 && parsedSize <= 100) {
        createGrid(parsedSize);
    } else {
        alert("Please enter a valid number between 1 and 100.");
    }
});

// Initialize with default grid size
createGrid(16);
