let slider = document.getElementById("slider");
let slider2 = 
let fish = document.getElementById("fish");

function color() {
    console.log("color");
    let value = slider.value;
    fish.style.filter = `hue-rotate(${value}deg)`;
}

slider.addEventListener("input", color);

function warp() {
  console.log("warp");
  let value = slider2.value;
  fish.style.transform = `skewX(${value}deg)`;
}