// defaults
let canvasSize = 16;
let penColor = "black";


const loadCanvas = (size) => {
    const canvas = document.getElementById("canvas") || document.createElement("div");

    for (let i = 0; i < size; i++) {
        let canvasRow = document.createElement("div");
        canvasRow.className = "canvasRow";
        canvas.appendChild(canvasRow);

        for (let j = 0; j < size; j++) {
            let canvasSpace = document.createElement("div");
            canvasSpace.className = "canvasSpace";
            canvasRow.appendChild(canvasSpace);
        }
    }
};


const setPenColor = (color) => {
    const canvasSpaces = document.getElementsByClassName("canvasSpace");

    for (let i = 0; i < canvasSpaces.length; i++) {
        canvasSpaces[i].addEventListener("mouseover", () => {
            canvasSpaces[i].style.backgroundColor = color;
        })
    }
};

const registerSlider = () => {
    document.getElementById("sliderValue").innerHTML = canvasSize;
    document.getElementById("canvasSlider").setAttribute("value", canvasSize.toString());
    document.getElementById("canvasSlider").addEventListener("input", (event) => {
        document.getElementById("sliderValue").innerHTML = event.target.value;
    });
}


document.addEventListener("DOMContentLoaded", () => {
    loadCanvas(canvasSize);
    setPenColor(penColor);
    registerSlider();
})