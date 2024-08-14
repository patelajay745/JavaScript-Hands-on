var prompt = require("prompt-sync")();

let totalNumber = parseInt(prompt("How Many number:"));
var sum = 0;
for (let i = 1; i <= totalNumber; i++) {
  sum = sum + parseInt(prompt("Enter number:"));
}
console.log(`Mean of Entered number is ${sum / totalNumber}`);
