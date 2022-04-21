let slider = document.getElementById("slider");
let box = document.getElementById("model-viewer");
let positionSlider = document.getElementById("position_slider");

function rotate() {
    console.log("slide");
    let value = slider.value;
    let positionValue = positionSlider.value;
    box.style.filter = `hue-rotate(${value}deg)`;
}

slider.addEventListener("input", rotate);