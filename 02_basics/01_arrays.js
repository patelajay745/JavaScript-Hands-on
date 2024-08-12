const myArr = [0, 1, 2, true, "Ajay"];

// console.log(myArr[2]);

const myArr2 = new Array(1, 2, 3, 4);

myArr2.forEach((item) => {
  console.log(item * 2);
});

//doesn't work
let a = myArr2.forEach((item) => {
  return item * 2;
});

let b = myArr2.map((i) => {
  return i * 2;
});

console.log(b);

// myArr.push(6)
// //myArr.pop()
// myArr.unshift(5)
// //myArr.shift()
// const myNewArray= myArr.slice(1,3)
// console.log(myArr.includes(6))
// console.log(myArr);
// console.log(myNewArray);

// //splice cut raqnge values and make new array.
// const myNewArray2= myArr.splice(1,3)
// console.log("original array",myArr);
// console.log("New Array",myNewArray);
