//while loop
let i = 0;
while (i <= 10) {
  console.log(`value of index is ${i}`);
  i = i + 2;
}
//---------------------------------------------------------------------------------

let myArray = [
  "flash",
  "batman",
  "superman",
  "ironman",
  "spiderman",
  "hulk",
  "thor",
  "antman",
];
let arr = 0;
while (arr < myArray.length) {
  console.log(`value is ${myArray[arr]}`);
  arr = arr + 1;
}
//---------------------------------------------------------------------------------

//do while loop
//it will run the code at least once and then it will check the condition

let score = 1;
do {
  console.log(`score is ${score}`);
  score++;
} while (score <= 10);
