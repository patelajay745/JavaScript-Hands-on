const prompt = require("prompt-sync")();

let myArray = [1, 2, 3, 4, 5];
let valueToAdd;

do {
  valueToAdd = prompt("Enter value to add into array: ");
  valueToAdd = Number.parseInt(valueToAdd);
  myArray.push(valueToAdd);
} while (valueToAdd != 0);

console.log(myArray);
