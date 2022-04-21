let slider = document.getElementById("slider");
let slider2 = document.getElementById("slider2");
let fish = document.getElementById("fish");

function color() {
    console.log("color");
    let value = slider.value;
    fish.style.filter = `hue-rotate(${value}deg)`;
}

slider.addEventListener("input", color);

function species() {
  console.log("species");

}