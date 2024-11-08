// 1. Datatype Conversion:
//Question: Convert the following variables into the appropriate data types:
//let num = "123";
// let str = 45;
// let bool = "true";

// Convert num to a number.
// Convert str to a string.
// Convert bool to a boolean.

let num = "123";
let str = 45;
let bool = "true";

let convrtedNum = Number(num);
let convrtedStr = String(str);
let convrtedBool = Boolean(bool);

// console.log(convrtedNum);
// console.log(convrtedStr);
// console.log(convrtedBool);

//2. Comparison of Data Types:
// Question: Compare the following expressions and state whether they are true or false:
// let a = 5;
// let b = "5";
// let c = 0;
// let d = false;
let a = 5;
let b = "5";
let c = 0;
let d = false;
// console.log(`a == b =>`, a == b);
// console.log(`a === b =>`, a === b);
// console.log(`c == d =>`, c == d);
// console.log(`c === d =>`, c === d);

// 3. String Manipulation:
// Question: Perform the following string manipulations:
// let str1 = "Hello";
// let str2 = "World";
// let str3 = "   JavaScript  ";

let str1 = "Hello";
let str2 = "World";
let str3 = "   JavaScript  ";
console.log(`concatenation with space in between`, str1 + " " + str2);
console.log(`converting to upper case`, str1.toUpperCase());
console.log(`removing leading and trailing spaces`, str3.trim());

// 4. Combining Conversion and Comparison:
// Question: Compare these expressions:
let x = "10";
let y = 10;
// Compare x and y using both loose and strict equality.
// Convert x to a number and compare again.
console.log(`x == y =>`, x == y);
console.log(`x === y =>`, x === y);
let convertNumber = Number(x);
console.log(`x == convertNumber =>`, x == convertNumber);

// 5. Datatype Conversion in Conditional Statements:
// Question: Write an if statement to check if the string "0" is truthy or falsy after conversion. Also, check the number 0.

let newnum = "0";
let new1 = 0;
if (Boolean(newnum)) {
  console.log(`Truthy`);
} else {
  console.log(`Falsy`);
}
if (Boolean(new1)) {
  console.log(`Truthy`);
} else {
  console.log(`Falsy`);
}
