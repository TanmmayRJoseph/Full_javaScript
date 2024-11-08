const user = {
  username: "tanmmay",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`); //this keyword is used to refer to the current object or context
    console.log(this)
  },
};
// user.welcomeMessage();//tanmmay, welcome to website
// user.username="sam"
// user.welcomeMessage()//sam, welcome to website
// console.log(this)//it will give empty object

// function chai(){
//   let username1="tanmmay"
//   console.log(this.username1)
// }
// chai()//undefined

// const chai=function(){
//   let username="tanmmay"
//   console.log(this.username)
// }
// chai()//undefined

// const addTwo=(num1,num2)=>{//basic arrow function, explicit return
//   return num1+num2
// }
// const addTwo=(num1,num2)=> num1+num2//implicit return,no need of curly braces and return keyword

const addTwo=()=>({username:"tanmmay"})
console.log(addTwo(3,4))//7


