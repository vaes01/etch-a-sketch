let isTouchDevice = window.matchMedia("(any-pointer: coarse)").matches; 

let mainContainer = document.querySelector(".mainContainer");

if (isTouchDevice) {
    mainContainer.classList.add("mainContainerMobile");
}

let newSketchBtn = document.querySelector("#newSketchBtn");

buildGrid(30);
paintGrid();

newSketchBtn.addEventListener("pointerup", () => {

    let pixels = 10;

    for (let i = 1; i > 0; i++) {
        pixels = prompt("How many squares per side? 10 minimum and 100 maximum.");

        if (pixels >= 10 && pixels <= 100) {
            i = -1;
        } else {
            alert("Please select a number of squares between 10 and 100.");
        }
    }

    removeContainerRows = document.querySelectorAll(".containerRows");
    removeContainerRows.forEach(element => {
        element.remove();
    });

    buildGrid(pixels);
    paintGrid();

});


function buildGrid(pixels) {

    for (let i = 1; i <= pixels; i++) {
        let containerRow = document.createElement("div")
        containerRow.classList.add("containerRows");
        mainContainer.appendChild(containerRow);

        for (let j = 1; j <= pixels; j++) {

            let gridElement = document.createElement("div");
            gridElement.classList.add("gridElements");
            containerRow.appendChild(gridElement);

        }
    };
};

function paintGrid() {

    let allGridElements = document.querySelectorAll(".gridElements");

    allGridElements.forEach(element => {
        if (isTouchDevice) {
            element.addEventListener("pointerenter", () => {
                element.style.backgroundColor = "black";        
            });
        } else {
            element.addEventListener("mouseenter", () => {
                element.style.backgroundColor = "black";        
            });
        }

    });
};
     