// //for loop
// for (let index = 0; index <= 60; index++) {
//   const element = index;
//   if (index == 50) {
//     console.log("50 is best number");
//   }
//   console.log(`value of index is ${element}`);
// } //it will print the value of index from 0 to 60 and if the value of index is 50 it will print "50 is best number"

//------------------------------------------------------------------------------------------------------

// This code demonstrates nested loops in JavaScript
// Outer loop: iterates from 0 to 10

// Explanation:
// 1. The outer loop runs 11 times (0 to 10 inclusive).
// 2. For each iteration of the outer loop:
//    a. It prints the current value of 'i'.
//    b. The inner loop then runs 11 times (0 to 10 inclusive).
//    c. For each iteration of the inner loop, it prints both 'j' (inner loop value) and 'i' (outer loop value).
// 3. This results in a total of 11 * 11 = 121 iterations of the inner loop.
// 4. The output will show how the inner loop completes all its iterations for each step of the outer loop.
for (let i = 0; i <= 10; i++) {
  console.log(`Outer loop value is: ${i}`);

  // Inner loop: also iterates from 0 to 10 for each iteration of the outer loop
  for (let j = 0; j <= 10; j++) {
    console.log(`Inner loop value is: ${j} and outer loop value is: ${i}`);
  }
}

//------------------------------------------------------------------------------------------------------
//printing the table of 2
for (let i = 1; i <= 10; i++) {
  console.log(`2 * ${i} = ${2 * i}`);
}

console.log("----------------------------------------------------------");
//printing table of 3
for (let i = 1; i <= 10; i++) {
  console.log(`3 * ${i} = ${3 * i}`);
}
//----------------------------------------------------------

let myHeros = ["thor", "spiderman", "ironman", "batman", "superman"];
for (let index = 0; index < myHeros.length; index++) {
  const element = myHeros[index];
  console.log(element);
}

//break and continue
// for (let i = 1; i <= 20; i++) {
//   if (i == 5) {
//     console.log("5 is best number");
//     break;
//   }
// console.log(`value of i is ${i}`);
// }

//------------------------------------------------------------------------------
// The 'continue' statement in a loop
// Definition: 'continue' is used to skip the rest of the code inside a loop for the current iteration
// and move to the next iteration.

// Explanation:
// In this loop, when i equals 5:
// 1. It prints "5 is best number"
// 2. The 'continue' statement then skips the console.log below it
// 3. The loop moves to the next iteration (i becomes 6)
// As a result, "value of i is 5" is never printed, but the loop continues for all other numbers

for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    console.log("5 is best number");
    continue;
  }
  console.log(`value of i is ${i}`);
}
//------------------------------------------------------------------------------
