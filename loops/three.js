// Some of these are Array specific
//for of loop
const myArray = [1, 2, 3, 4, 5];
for (const num of myArray) {
  //basic for of loop
//   console.log(num);
}
const greetings = "Hello World!";
for (const greeting of greetings) {
  //for of loop for strings
  if (greeting === " ") {
    //skips spaces
    continue;
  }
//   console.log(greeting);
}


//---------------------------------Maps--------------------------------------------
const myMap = new Map();//map is an object that holds key value pairs
myMap.set('IN', "India")
myMap.set('USA', "United States of America")
myMap.set('Fr', "France")
myMap.set('IN', "India");
// console.log(myMap);

for (const [key,value ]of myMap) {
  console.log(key, ":-", value);
}

//for in loop for objects
const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};
// for (const key in myObject) {
//   console.log(key, ":-", myObject[key]);
// }



