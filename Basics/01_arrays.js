const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const heros = ["spiderman", "thor", "ironman", "hulk", "captain america"];
const Arr2 = new Array(1, 2, 3, 45, 65, 34); //Array constructor,another way of declaring an array
// console.log(Arr2.length);

//------------------Array methods----------------------//
myArr.push(11); //add element at the end
myArr.pop(); //remove element at the end
myArr.unshift(89); //add element at the start
myArr.shift(); //remove element at the start
myArr.splice(2, 0, 100); //start index, number of element to be deleted, element to be added
myArr.sort(); //sort the array

// console.log(myArr);
// console.log(myArr.includes(89))//check if the element is present in the array
// console.log(myArr.indexOf(9))//return the index of the element

const newArr = myArr.join(); //convert array to string
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);//string

//--------------slice,splice--------------------
console.log("A ", myArr);
const myn1 = myArr.slice(2, 5); //start index, end index,returns a section of array
console.log(myn1);
console.log("B ", myArr);
const myn2 = myArr.splice(2, 5); //start index, number of element to be deleted
console.log("C ", myArr);
console.log(myn2);


