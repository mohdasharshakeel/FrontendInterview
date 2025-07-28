//! Pure functions vs impure functions
//* [pure function ] Ek aisi function jo hamesha same input par same output deta hai aur koi side effect nahi karta. 

//* [Impure function ] Ek aisi function jo same input par alag output de sakta hai ya external cheezon (jaise global variable, console, file, etc.) ko affect karta hai.


//? Impure function ka example:
// var a = 10;

// function abc(x){
//     a+=x
//     return a;
// }

// console.log(abc(5)); // 15
// console.log(abc(5)); // 20

//! difference ways to handle async operations in JS
//! what is higher order function
//! difference between forEach and Map 
//! filter vs find 
//! Event loop 
//! normal function vs arrow function

// var a =1000;
// {
//     var a = 2000
// }

// let b = a 

// {
//     let b = 3000
// }

// console.log(a); // 2000
// console.log(b); // 2000

//! normal vs default export 
//! session storage vs local storage vs cookies 
//! slice vs splice
//! debounce vs throttle
//! use strict 
//! shift vs unshift
//! few features of ES6
//! 

// let aar = [,,,]
// console.log(aar.length); // 3 

function abc(a,b,c){

}

function xyz(a,b, c=0){

}

function pqr(a=0,b,c){

}

console.log(abc.length , xyz.length, pqr.length); // 3 2 0

// JavaScript Function .length Property kya hoti hai?
// Jab kisi function ka .length property check karte ho (functionName.length), toh wo batata hai kitne parameters function me diye gaye hain jo "default value nahi rakhte".
// ⚠️ Default value wale parameters count nahi hote uske baad ke saare bhi ignore ho jaate hain.

//! types of datatypes in JS

// let arr1 = []
// let arr2 = []
// console.log(arr1 === arr2); // false
// console.log(arr1 == arr2); // false 

if([]){
console.log("yeah hahaha") // true
}else{
 console.log("nahiiii")
}

