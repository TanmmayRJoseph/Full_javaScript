const coding = ["js", "ruby", "java", "python", "cpp"];
// const values = coding.forEach((item) => {
//   console.log(item);
// //   return item;
// });
// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNums.filter((num) => num > 4);
const newNums = [];
myNums.forEach((num) => {
  if (num >= 4) {
    newNums.push(num);
  }
});
console.log(newNums);

//
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Seven', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Eight', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Nine', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Ten', genre: 'Science', publish: 2009, edition: 2014 },
]
const userBooks=books.filter((book)=>book.publish==2009 && book.genre==="History")
const multipleBooks=books.filter((books)=>{
    return books.publish>=1995 && books.genre==="History"
})
console.log(userBooks);
console.log(multipleBooks);
