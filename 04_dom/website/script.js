let b = document.body;

const changeBodyColor = () => {
  document.body.firstElementChild.style.backgroundColor = "red";
};
changeBodyColor();
console.log("First child of b is : ", b.firstChild);
console.log("First element child of b is : ", document.body.firstElementChild);
