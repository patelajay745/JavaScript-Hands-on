console.log("Hello World");
document.getElementById("navbar").firstElementChild.style.backgroundColor =
  "red";
document.getElementById("navbar").lastElementChild.style.backgroundColor =
  "Green";

document.getElementById("navbar").style.backgroundColor = "cyan";

const jokes = [
  "Why don't skeletons fight each other? They don't have the guts.",
  "What do you call fake spaghetti? An impasta!",
  "Why don't some couples go to the gym? Because some relationships don't work out.",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "What do you call cheese that isn't yours? Nacho cheese.",
  "Why did the bicycle fall over? Because it was two-tired!",
  "What do you call a fish wearing a crown? A kingfish.",
  "Why don't eggs tell jokes? Because they might crack up!",
  "What does a cloud wear under his raincoat? Thunderwear.",
  "Why did the math book look sad? Because it had too many problems.",
  "How does a penguin build its house? Igloos it together.",
  "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
  "What do you call a bear with no teeth? A gummy bear!",
  "Why don't oysters share their pearls? Because they're shellfish.",
  "What do you get when you cross a snowman and a vampire? Frostbite.",
];




document.getElementById("jokes").firstElementChild.innerHTML =
  jokes[Math.floor(Math.random() * jokes.length)];
