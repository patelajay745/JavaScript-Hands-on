var prompt = require("prompt-sync")();

let actualNumber = Math.floor(Math.random() * 10 + 1);
let userInput;
while (parseInt(userInput) != actualNumber) {
  userInput = prompt("Guess Number:");
}
console.log("You guessed right");
