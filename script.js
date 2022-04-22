let slider = document.getElementById("slider");
let slider2 =  document.getElementById("slider2");
let fish = document.getElementById("fish");

function color() {
  let value = slider.value;
  fish.style.filter = `hue-rotate(${value}deg)`;
}

slider.addEventListener("input", color);

function species() {
  let value = slider2.value;
  
if (value == 1) {
        document.getElementById("fish").src = "https://cdn.glitch.global/d99d0544-47ec-4043-bd39-1e149e6c6393/aji.glb?v=1650566052865";
    } else {
        document.getElementById("fish").src = "https://cdn.glitch.global/d99d0544-47ec-4043-bd39-1e149e6c6393/bass.glb?v=1650581382210";
    }
}

slider2.addEventListener("input", species);
