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

