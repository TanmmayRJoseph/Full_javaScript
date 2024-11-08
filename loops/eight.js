//reduce method
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const myTotal = myNums.reduce((acc, currval) => {
  console.log(`acc:${acc} and currval:${currval}`);
  return acc + currval;
}, 0); //reduce takes a callback function and returns a single value
console.log(myTotal);


//Shopping cart example using reduce method
const shoppingCart=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"py course",
        price:2999
    },
    {
        itemName:"ruby course",
        price:2999
    },
    {
        itemName:"java course",
        price:2999
    },
    {
        itemName:"C# course",
        price:2999
    }
]
const priceToPay=shoppingCart.reduce((acc,currval)=>(acc+currval.price),0)
console.log(priceToPay);


