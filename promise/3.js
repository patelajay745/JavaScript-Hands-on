fetch("https://fakestoreaphhi.com/userrs")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));