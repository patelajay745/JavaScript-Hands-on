const prompt = require("prompt-sync")();

let randomNum = Math.floor(Math.random() * 100);
console.log(randomNum);

let gussedNum;
let attempt = 0;

do {
  gussedNum = Number.parseInt(prompt("Guess the right number: "));
  if (randomNum > gussedNum) {
    console.log("Entered number is smaller then actual number");
  } else if (randomNum < gussedNum) {
    console.log("Entered number is larger then actual number");
  }
  attempt += 1;
} while (gussedNum != randomNum);

console.log(
  `You have guessed number in ${attempt} attempts. Your score is ${
    100 - attempt
  }`
);
