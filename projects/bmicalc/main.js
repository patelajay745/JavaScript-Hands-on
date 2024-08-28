const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const h = Number(document.querySelector("#height").value) / 100;
  const w = Number(document.querySelector("#weight").value);
  const bmi = w / (h * h);
  console.log(bmi);

  const result = document.querySelector("#results");
  result.innerHTML = bmi.toFixed(2);
});
