var n = Math.random();
n = n * 3;
var x = Math.random();
x = x * 3
var randomNumber1 = Math.floor(n + 1);
var randomNumber2 = Math.floor(x + 1);

document.querySelector("img").setAttribute("src", "images/rps" + randomNumber1 + ".png")
document.querySelectorAll("img")[1].setAttribute("src", "images/rps" + randomNumber2 + ".png")

if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!"
} else if (randomNumber1 === 3 && randomNumber2 === 1) {
  document.querySelector("h1").innerHTML = "Player 1 wins!"
} else if (randomNumber1 === 1 && randomNumber2 === 2) {
  document.querySelector("h1").innerHTML = "Player 1 wins!"
} else if (randomNumber1 === 2 && randomNumber2 === 3) {
  document.querySelector("h1").innerHTML = "Player 1 wins!"
} else if (randomNumber2 === 3 && randomNumber1 === 1) {
  document.querySelector("h1").innerHTML = "Player 2 wins!"
} else if (randomNumber2 === 1 && randomNumber1 === 2) {
  document.querySelector("h1").innerHTML = "Player 2 wins!"
} else if (randomNumber2 === 2 && randomNumber1 === 3) {
  document.querySelector("h1").innerHTML = "Player 2 wins!"
}
