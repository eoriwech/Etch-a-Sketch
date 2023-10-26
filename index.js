const containerDiv = document.querySelector(".container");
const button = document.querySelector("button");
let gridContainerSize = containerDiv.offsetWidth;


function genSketchPad(gridNum) {
    for (let i = 0;i < gridNum * gridNum; i++) {
    const childDiv = document.createElement("div");
    childDiv.setAttribute("class", "gridDiv");
    childDiv.style.width = childDiv.style.height = `${gridContainerSize / gridNum}px`;
    containerDiv.appendChild(childDiv);
    }
}

//Remove all the current square grids
function removeAllChild(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

//Generate number of square grids according to the user
button.addEventListener("click", () => {
    let userInput = prompt("How many square grids per side do you want?");
    let result = parseInt(userInput);
    removeAllChild(containerDiv);
    genSketchPad(result);
})

