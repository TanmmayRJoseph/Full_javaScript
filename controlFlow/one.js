//if else
const isUserLoggedIn = true;

if (isUserLoggedIn == true) {
  //   console.log("allow to buy cars");
} else {
  console.log("dont allow to buy cars");
}

//--------------------------------------------------------------------------------------
//Conditional Signs
//== Equal , != Not Equal , === Strict Equal , !== Strict Not Equal , <= greater than or equal to , >= less than or equal to , < less than , > greater than

//Logical Operators
//&& And , || Or , ! Not

//Ternary Operator
//condition ? true : false

//--------------------------------------------------------------------------------------
const score = 200;
if (score > 100) {
  let power = "fly";
  console.log(`User power: ${power}`);
}

const balance = 11000;
// if (balance>500) console.log("Minimum balance maintained"); //implicit Conditional statement, (this is not a good practice)

//nesting conditional statements
// if (balance>10000){
//     console.log("Minimum balance maintained")
// }else if (balance<1000){
//     console.log("You have a good balance")
// }else{
//     console.log("You have a bad balance")
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

// This code block checks various conditions to determine if a user is allowed to buy courses and from which platforms.

// First condition: If the user is logged in AND has a debit card
if (userLoggedIn && debitCard) {
  console.log("Allow to buy courses");
}
// Second condition: If the user is logged in AND logged in from both Google and Email
else if (userLoggedIn && loggedInFromGoogle && loggedInFromEmail) {
  console.log("Allow to buy courses from Google and Email");
}
// Third condition: If the user is logged in AND logged in from Google
else if (userLoggedIn && loggedInFromGoogle) {
  console.log("Allow to buy courses from Google");
}
// Fourth condition: If the user is logged in AND logged in from Email
else if (userLoggedIn && loggedInFromEmail) {
  console.log("Allow to buy courses from Email");
}
// If none of the above conditions are met
else {
  console.log("Not allowed to buy courses");
}
//---------------------------------------------------------------------------------


if (userLoggedIn && (loggedInFromEmail || loggedInFromGoogle)) {
  console.log("User just logged in");
}
