let slider = document.getElementById("slider");
let fish = document.getElementById("model-viewer");

function color() {
    console.log("slide");
    let value = slider.value;
    let positionValue = positionSlider.value;
    fish.style.filter = `hue-rotate(${value}deg)`;
}

slider.addEventListener("input", color);