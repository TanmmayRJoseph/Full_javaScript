const marvel_heros = ["spiderman", "thor", "hulk", "ironman"];
const dc_heros = ["batman", "wonderwoman", "flash", "blackpanther"];
// marvel_heros.push(dc_heros);
//console.log(marvel_heros)//this is the wrong way of doing it to merge 2 arrays
// const allheros = marvel_heros.concat(dc_heros);//this is the right way to merge 2 arrays
// console.log(allheros);




const all_new_heros = [...marvel_heros, ...dc_heros];//spread operator used to merge 2 arrays together
console.log(all_new_heros);


const another_array=[1,2,3[4,5,6],7,[6,7[4,5]]];//arrays can be nested also
const real_another_array=another_array.flat(3);//flattens the array
console.log(real_another_array);


console.log(Array.isArray("Tanmmay") )//check if the element is an array
console.log(Array.from("Tanmmay"))//convert string to array


let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))//convert number to array