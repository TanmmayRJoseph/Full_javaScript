//immediately invoked function expression
//function that runs as soon as it is defined
function chai() {
  console.log("DB CONNECTED");
}
chai(); //this is a normal function declaration and it will be executed when it is called

//IIFE
(function chai() {
  console.log("DB CONNECTED TWO");
})(); //this is an IIFE

//IIFE with arrow function
((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("tanmmay");

//IIFE with arrow function and implicit return
((name) => console.log(`DB CONNECTED TWO ${name}`))("tanmmay");

//self practice
((num1, num2) => {
  console.log("hello", num1 + num2);

  return num1 + num2;
})(2, 3);

((age) => console.log(`jai shree ram ${age}`))(20);
