const p1 = new Promise((resolve, reject) =>
  setTimeout(() => {
    console.log("p1 fulfilled");
    resolve(5);
  }, 2000)
);

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("p2 fulfilled");
    resolve(7);
  }, 3000);
});

(async () => {
  let a = await Promise.all([p1, p2]);
  console.log(a);
})();
