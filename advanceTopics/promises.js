// promises
const promiseOne = new Promise((resolve, reject) => {
  //do async tasks
  //DB calls,cryptography,network calls
  setTimeout(() => {
    console.log("i have succeeded");
    resolve();
  }, 1000);
});
promiseOne.then(() => {
  console.log("promise consumed");
});

//promise with parameters

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task completed");
    resolve();
  }, 2000);
}).then(() => {
  console.log("Promise consumed");
});

//promise with parameters
const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task 3 completed");
    resolve({ username: "John", email: "john@gmail.com" });
  }, 2000);
});

promiseThree.then((user) => {
  console.log(user);
});

//promise with error
const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "John", email: "john@gmail.com" });
    } else {
      reject("ERROR:Something went wrong");
    }
  }, 2000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise is either resolved or rejected");
  });



const promiseFive=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({username:"John",email:"john@gmail.com"})
    },2000)
});


async function consumePromiseFive(){
   const response=await promiseFive
   console.log(response)
}

consumePromiseFive()

