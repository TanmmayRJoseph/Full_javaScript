//singleton
//Objects
//object literals
const mySym = Symbol("key1"); //symbol is a data type in javascript, and this is how we declare it
const JSUser = {
  name: "Tanmmay",
  age: 18,
  [mySym]: "mykey1", //inserting symbol as a key in an object
  email: "john@gmail.com",
  location: "USA",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};
//accessing object properties
// console.log(JSUser.email); //dot notation
// console.log(JSUser["email"]); //bracket notation
// console.log(JSUser["age"]);
// console.log(JSUser[mySym]); //accessing symbol as a key

//updating object properties
JSUser.email = "john123@gmail.com";
// console.log(JSUser["email"]);
//Freeze the object so that no changes can be made
// Object.freeze(JSUser); //this will prevent any changes to the object
JSUser.email = "john1234@gmail.com";
// console.log(JSUser["email"]);



JSUser.greeting=function(){//adding a function to the object as a method
    console.log("Hello JS User")
};
JSUser.greetingTwo=function(){//adding a function to the object as a method
    console.log(`Hello JS User, ${this.name}`)//this keyword is used to refer to the current object
};
console.log(JSUser.greeting); //calling a function method 1 , it will return the function definition
console.log(JSUser.greeting()); //calling a function method 2 , it will return the function output
console.log(JSUser.greetingTwo()); //calling a function method 2 , it will return the function output
