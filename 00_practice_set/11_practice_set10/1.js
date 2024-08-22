new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Script is loaded");
    return resolve(true);
  }, 5000);
}).then((v) => {
  if (v) {
    alert("Loaded");
  }
});

const loadScript = async (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(src);
    };
    document.head.append(script);
  });
};

const main2 = async () => {
  let a = await loadScript(
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
  );
  console.log(a);
};
main2();
