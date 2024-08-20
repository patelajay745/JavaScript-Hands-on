document
  .getElementsByClassName("btn-primary")[0]
  .addEventListener("click", function () {
    changeBodyColor("red");
  });

document
  .getElementsByClassName("btn-secondary")[0]
  .addEventListener("click", function () {
    changeBodyColor("green");
  });

function changeBodyColor(color) {
  document.getElementsByClassName("container")[0].style.backgroundColor = color;
}
