//! what is week-map method 
//! what is set 
//! what is the use of new keyword
//! deep copy vs shallow copy
//! what is generative function



//? count the characters in a string
// let str = "my name is ashar";


// let str = "my name is ashar";
// let freq = {};

// for (let char of str) {
//   if (char === " ") continue; // space ignore kar rahe hain

//   if (freq[char] === undefined) {
//     freq[char] = 1;   // pehli baar mila
//   } else {
//     freq[char] = freq[char] + 1;  // pehle se tha, +1 kar do
//   }
// }

// console.log(freq)

//? reverse the sentence
//  let str = "my name is ashar";
//  let arr = str.split(" ");
//  let sentence= "";

//  for(let i = arr.length - 1; i >= 0; i--){
//         sentence += arr[i] + " ";
//     }

// console.log(sentence)   

//! types of web storage || local storage vs session storage 
//! map vs forEach
//! function delegation vs function expression
//! event delegation vs event bubbling
//! callback hell .. how to avoid it
//! null vs undefined

// let obj ={
//     name : "ashar",
//     abc : {
//         name : "uchiha",
//         experience : "5 years"
//     }
// }

// const obj2 = {...obj}

// obj2.abc.name = "uzumaki"

// console.log(obj.abc.name) // uzumaki

// const obj = {},obj2 ={
//     name: "ashar",
// }, obj3 = {
//     name : "shakeel"
// }
// obj[obj2]={name:"subhan"}
// obj[obj3]={name:"uzumaki"}

// console.log(obj[obj2])


//! flat the array
const arr = [[0, 1], ["ashar", "uchiha"], [2, 3]];

const flatten = (inputArr) =>
  inputArr.reduce((acc, el) => 
    acc.concat(Array.isArray(el) ? flatten(el) : el), []
  );

console.log(flatten(arr));
