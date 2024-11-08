const userEmail = "hitu@gamil.com";

if (userEmail) {
  //truthy value
  console.log("Got user email");
} else {
  //falsy value
  console.log("Don't have user email");
}
//--------------------------------------------------------------------------
// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}
//--------------------------------------------------------------------------
const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  //to check object is empty or not
  console.log("Object is empty");
}

const emptyArray = [];

if (emptyArray.length === 0) {
  //to check array is empty or not
  console.log("Array is empty");
}

//Nullish Coalescing Operator (??): null undefined
// Nullish Coalescing Operator (??) explained:

// The ?? operator returns the right-hand operand when the left-hand operand is null or undefined.
// It's useful for providing default values.

let val1;
val1 = 5 ?? 10;
// val1 is 5 because 5 is not null or undefined

val2 = null ?? 10;
// val2 is 10 because null is nullish, so it takes the right-hand value

val3 = undefined ?? 15;
// val3 is 15 because undefined is nullish, so it takes the right-hand value

val4 = null ?? undefined;
// val4 is undefined because null is nullish, so it takes the right-hand value (which happens to be undefined)

val5 = undefined ?? null;
// val5 is null because undefined is nullish, so it takes the right-hand value (which happens to be null)

console.log(val1); // Output: 5
console.log(val2); // Output: 10
console.log(val3); // Output: 15
console.log(val4); // Output: undefined
console.log(val5); // Output: null

//Ternary Operator
// The ternary operator is a shorthand for an if-else statement.
// It's useful for providing default values.
// syntax: condition ? expression1 (True) : expression2 (False)
let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
// canVote is "Yes" because age is 18, which is greater than or equal to 18

console.log(canVote); // Output: "Yes"

const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80"); //false

a = 5;
b = "5";
a == b ? console.log("a is equal to b") : console.log("a is not equal to b"); //true
a === b ? console.log("a is equal to b") : console.log("a is not equal to b"); //false
