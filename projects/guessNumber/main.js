const form = document.querySelector("form");
const guessField = document.querySelector("#guessField");
const message = document.querySelector("h1");
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");

let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(`Random Number: ${randomNumber}`); 

let prevGuesses = [];
let remainingGuesses = 10;
let gameActive = true;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!gameActive) return;

  if (remainingGuesses === 0) {
    message.textContent = "You lost the game!";
    return;
  }

  const guessedNumber = parseInt(guessField.value, 10);
  if (isNaN(guessedNumber)) {
    message.textContent = "Please enter a valid number.";
    return;
  }

  remainingGuesses -= 1;
  prevGuesses.push(guessedNumber);

  if (guessedNumber === randomNumber) {
    message.textContent = "WOOOO, You guessed right!";
    resetGame();
    return;
  }

  guesses.textContent = prevGuesses.join(", ");
  lastResult.textContent = remainingGuesses;
  guessField.value = "";

  if (remainingGuesses === 0) {
    message.textContent = `You've used all your guesses! The correct number was ${randomNumber}.`;
  } else {
    message.textContent =
      guessedNumber < randomNumber ? "Too low!" : "Too high!";
  }
});

function resetGame() {
  gameActive = false; // Stop the game from accepting further guesses
  setTimeout(() => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`New Random Number: ${randomNumber}`); // For debugging purposes
    prevGuesses = [];
    remainingGuesses = 10;
    gameActive = true;
    message.textContent = "New game started! Guess the number:";
    guesses.textContent = "";
    lastResult.textContent = `Remaining Guesses: ${remainingGuesses}`;
    form.reset();
  }, 5000); // Wait for 3 seconds before resetting the game
}
