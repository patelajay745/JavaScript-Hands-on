new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Hello i am network call");

    //it is either resolve or reject. not both
    err = true;
    if (err) {
      reject(err);
    }
    // resolve({ username: "ajay" });
  }, 5000);
})
  .then((user) => {
    console.log(user.username);
  })
  .catch((err) => console.log(err));

// second way
let p1 = new Promise((resolve, reject) => {
  console.log("I am network call2");
  resolve({ username: "Virasngi" });
});

async function consume() {
  console.log(await p1);
}

consume();
