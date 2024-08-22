let p = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Not acceptable"));
    }, 3000);
  });
};

let a = async () => {
  try {
    let c = await p();
    console.log(c);
  } catch (err) {
    console.log("err has been handled");
  }
};

a();
