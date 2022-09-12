let hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
function randomNumber(min, max) {
  return Math.floor(Math.random() * hexValues.length);
}

let body = document.querySelector("body");
let button = document.querySelector("button");
let p = document.querySelector("h2");

button.addEventListener("click", function () {
  //   console.log(this.click);
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hexValues[randomNumber()];
  }
  console.log(hexColor);
  body.style.backgroundColor = hexColor;
  //   console.log(body);
  p.textContent = `The hex color is ${hexColor}`;
});
