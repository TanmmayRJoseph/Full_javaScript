function sayMyName() {
  //function declaration and its a anonymous function
  console.log("Tanmmay");
}
sayMyName(); //function call
function addTwoNumbers(num1, num2) {
  //function declaration and its a named function
  console.log(num1 + num2);
}
const result = addTwoNumbers(3, 4); //function call
// console.log("Result:",result)//it will return undefined because the function is not returning anything

//to store the value of the function we need to return the value from the function
function addTwoNumbers(num1, num2) {
  //function declaration and its a named function
  let result = num1 + num2;
  return result;
}
const result1 = addTwoNumbers(3, 4); //function call
console.log("Result1:", result1); //it will return the value of the function

// This function is named 'loginUserMessage' and takes one parameter 'username'
function loginUserMessage(username) {
  // It returns a template string that includes the username
  // The function creates a message saying the user has logged in
  return `${username} just logged in`;
}

// Here we call the function with the argument "Tanmmay"
// and log the returned message to the console
console.log(loginUserMessage("Tanmmay"));
// This will output: "Tanmmay just logged in" to the console

// This function is named 'userLogin' and takes one parameter 'username'
// It has a default parameter value of "Sam"
function userLogin(username = "Sam") {
  // Check if the username is undefined
  if (username === undefined) {
    // If username is undefined, log a message and exit the function
    console.log("Please enter a username");
    return;
  }
  // If username is defined, return a string with the username
  return `${username} just logged in`;
}

// Call the userLogin function without an argument
// This will use the default parameter value "Sam"
console.log(userLogin("Tanmmay"));
// This will output: "Sam just logged in" to the console

//rest operator is used to pass multiple arguments to a function
function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}
console.log(calculateCartPrice(200, 400, 500, 2000));

//how to pass objects as arguments in a function
const user = {
  username: "Tanmmay",
  price: 199,
};
function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}
handleObject(user);

//how to pass arrays as arguments in a function
const myNewArray = [200, 400, 100, 600];
function returnSecondValue(getArray) {
  return getArray[1];
}
console.log(returnSecondValue(myNewArray));

