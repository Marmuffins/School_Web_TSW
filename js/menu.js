const slider = document.querySelector(".slider");
const sliderText = document.querySelector(".slider-text");

function next() {
  slider.append(slider.querySelector(" img:first-child"));
  sliderText.append(sliderText.querySelector("p:first-child"));
}

function prev() {
  slider.prepend(slider.querySelector("img:last-child"));
  sliderText.prepend(sliderText.querySelector("p:last-child"));
}