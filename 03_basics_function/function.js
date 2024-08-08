function loginUserMessage(username = "sam") {
  //check parameter is there is not default value given
  // if (!username) {
  //     console.log("Please enter a username")
  // }
  return `${username} just logged in`;
}

//second way to write function
const loginUserMessage1 = (username) => {
  return `${username} just logged in`;
};

// console.log(loginUserMessage());
// console.log(loginUserMessage1("ajay"));

const calculatePrice = (...num1) => {
  console.log(num1);
};

calculatePrice(10, 20, 30);

const objecthandler = (anyobject) => {
  console.log(`username is ${anyobject.username}`);
};

objecthandler({ username: "AJAY" });

const arrayHandler = (anyArray) => console.log(anyArray[0]);

arrayHandler([10, 20]);
