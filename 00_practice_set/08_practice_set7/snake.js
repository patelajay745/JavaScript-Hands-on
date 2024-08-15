const prompt = require("prompt-sync")();

const selection = ["s", "w", "g"];

function computerSelection() {
  return selection[Math.floor(Math.random() * selection.length)];
}
let userSelection;

function winner(userInput, compInput) {
  if (!selection.includes(userInput)) {
    console.log("Not a valid choice. Please try again ! \n ");
  } else if (userInput == "s" && compInput == "w") {
    console.log("Congratulation, You won \n");
  } else if (userInput == "w" && compInput == "g") {
    console.log("Congratulation, You won \n");
  } else if (userInput == "g" && compInput == "s") {
    console.log("Congratulation, You won \n");
  } else if (userInput == "s" && compInput == "g") {
    console.log("You lost, better luck next time \n");
  } else if (userInput == "w" && compInput == "s") {
    console.log("You lost, better luck next time \n");
  } else if (userInput == "g" && compInput == "w") {
    console.log("You lost, better luck next time \n");
  } else {
    console.log("It is draw ! \n");
  }
}

console.log("Welcome to the game of snake water game \n");

do {
  userSelection = prompt(
    "Choose s for Snake, w for Water and g for Gun, e for exit : "
  ).toLowerCase();
  console.log("\n");

  const compSelection = computerSelection();
  //   console.log(` you have seleted ${userSelection} and `, typeof userSelection);

  if (userSelection != "e") {
    console.log(`computer have selected ${compSelection}`);
    winner(userSelection, compSelection);
  }
} while (userSelection != "e");
