const containerDiv = document.querySelector(".container");
const button = document.querySelector("button");
let gridContainerSize = containerDiv.offsetWidth;


//Generate a sketch pad of specified 'gridNum' square per side
function genSketchPad(gridNum) {
    for (let i = 0;i < gridNum * gridNum; i++) {
        const childDiv = document.createElement("div");
        childDiv.setAttribute("class", "gridDiv");
        childDiv.style.width = childDiv.style.height = `${gridContainerSize / gridNum}px`;
        containerDiv.appendChild(childDiv);

    //Event listener to change the background color of square when mouse moves over
    childDiv.addEventListener("mouseover", (event) => {
        let randomNum1 = Math.floor(Math.random() * 257);
        let randomNum2 = Math.floor(Math.random() * 257);
        let randomNum3 = Math.floor(Math.random() * 257);
        event.target.style.backgroundColor = `rgb(${randomNum1}, ${randomNum2}, ${randomNum3})`;
    })
    
    //Event listener to return to original background color when mouse moves away
    childDiv.addEventListener("mouseout", (event) => {
        event.target.style.backgroundColor = "yellow";
    })
    }
}

//Remove all the current square grids
function removeAllChild(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

//Generate number of square grids according to the user
//Remove the previous sketch pad square grids
button.addEventListener("click", () => {
    let promptInput = prompt("How many square grids per side do you want (between 1 and 100)?");
    while (promptInput > 100 || promptInput < 1 ) {
        promptInput = prompt("Please enter value between 1 and 100")
    } 
    let result = parseInt(promptInput);
    removeAllChild(containerDiv);
    genSketchPad(result);
})

//Initial pad by generating a sketch pad with 64 x 64 grids 
genSketchPad(10);
