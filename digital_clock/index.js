setInterval(() => {
  const date = new Date();
  const time = date.toLocaleTimeString();
  const timeDiv = document.getElementsByClassName("clock")[0];
  timeDiv.textContent = time;
}, 1000);
