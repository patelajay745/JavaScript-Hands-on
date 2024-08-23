const message = [
  "Intilizing hack program....",
  "Hacking Ajay username...",
  "username found patel.ajay745...",
  "connecting to facebook...",
];

function mypromise(time, message) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Intilizing hack program...");
      const div = document.getElementById("root");
      div.innerHTML = div.innerHTML + "</br>" + message;

      resolve();
    }, time);
  });
}

(async () => {
  for (const m of message) {
    await mypromise(3000, m);
  }
})();
