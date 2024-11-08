//map it takes a callback function and returns a new array
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = myNums.map((num) => num + 10);
console.log(newNums);


//chaining adding more than one method at a time
const newNums2 = myNums
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);
console.log(newNums2);
