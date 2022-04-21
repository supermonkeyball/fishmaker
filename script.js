let slider = document.getElementById("slider");
let fish = document.getElementById("fish");

function color() {
    console.log("color");
    let value = slider.value;
    fish.style.filter = `hue-rotate(${value}deg)`;
}

slider.addEventListener("input", color);

function species() {
  let value = slider.value;
  
  if (value < 1) {
  fish.style.src = `https://cdn.glitch.global/d99d0544-47ec-4043-bd39-1e149e6c6393/aji.glb?v=1650566052865`;
} else {
  //  block of code to be executed if the condition is false
}
}