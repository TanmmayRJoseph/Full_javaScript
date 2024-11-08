const tinderUser = {};
tinderUser.id = "123abc"; //dot notation
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser)

const regularUser = {
  //nested objects
  email: "some@gmail.com",
  fullname: {
    //we can make nested objects as much as we want
    userfullname: {
      firstname: "Tanmay",
      lastname: "R joseph",
    },
  },
};
// console.log(regularUser.fullname.userfullname.firstname)//accessing the nested object

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

const obj3 = Object.assign({}, obj1, obj2, obj4); //this will merge the objects and return a new object
// console.log(obj3)

const obj5 = { ...obj1, ...obj2, ...obj4 }; //this will create a new object with the objects as properties we will be using this method most of the time
// console.log(obj5)

//data will come like this from database i.e array of objects
const users = [
  {
    id: 1,
    email: "tanmay@gmail.com",
  },
];
// users[1].email;
console.log(tinderUser);
console.log(users[0].email); //accessing the email of the first user

console.log(Object.keys(tinderUser)); //this will return an array of keys of the object
console.log(Object.values(tinderUser)); //this will return an array of values of the object
console.log(Object.entries(tinderUser)); //this will return an array of arrays of the object
console.log(tinderUser.hasOwnProperty("isLoggedIn")); //this will check if the object has the property



// -------------------------Object Destructuring-------------------------//

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "Tanmay",
};

// course.courseInstructor
const { courseInstructor: instructure } = course; //here we are renaming the courseInstructor to instructure
console.log(instructure);


//Basic structure of JSON file
// {
//   "name":"Tanmay",
//   "coursename":"js in hindi",
//   "price":"free"
// }





