// document.querySelector("#grey").addEventListener("click", () => {
//   document.body.style.backgroundColor = "grey";
// });

// document.querySelector("#white").addEventListener("click", () => {
//   document.body.style.backgroundColor = "white";
// });

// document.querySelector("#blue").addEventListener("click", () => {
//   document.body.style.backgroundColor = "blue";
// });

// document.querySelector("#yellow").addEventListener("click", () => {
//   document.body.style.backgroundColor = "yellow";
// });

//second version

const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    document.body.style.backgroundColor = button.id;
  });
});
