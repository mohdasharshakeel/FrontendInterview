// let days = ["Sunday" , "Wednesday", "Thursday", "Friday", ];

// let index1 = days.findIndex((day)=>day === "monday");
// let index2 = days.findIndex((day)=>day === "Sunday");
// console.log(index1, index2); // -1 0 

//! example of includes

// const arr = [1,2,3,4,5];
// console.log(arr.includes(3,-9)); // true //! minus -4 index hai 
// console.log(arr.includes(6)); // false  


//  const arr = [1,2,4,5];

//  console.log(arr.splice(1,2,3,4) ) // ! -- 1 = index , 2 = kitne elemnt delete krna hai , 3 =kya insert krna hai[ do comma ke bd sb insert hota hai ]
//  console.log(arr)

// let arr = [1,2,4,5];
// arr.splice(arr.length-4, 3);
// console.log(arr) 

//! if we use find method to find elem and it is not present in the array then it will return undefined 
//! fun deleclaration , fun expression, arrow function dose all are hoisted 
//* normal function declaration is hoisted to the top of the scope 
//* fun expression and arrow function are not hoisted 


// ! reduce method example 

// let arr = [1,2,4,5]

// let sum = arr.reduce((acc, val )=>{
//     return acc <  val; 
// }, 0)

// console.log(sum)

// //! why we use optional chaining 

// obj = { name: "ashar" }
// age property nahi hai

// console.log(obj?.age); // ✅ Output: undefined 

// obj1 = {
//     name : "ashar",
//     obj2: {
//         game : "GTA v",
//         obj3 :{
             
//             food : "biryani",
//         }

//     }
// }
// console.log(obj1?.obj4?.obj2.game)


//! undefined vs undeclared 
// var a;
// console.log(a) // Output: undefined
// console.log(b) // ReferenceError: b is not defined 

// c= 100 
// console.log(c)  //! window me jaega 

// var a = 50 ;
// {
//     var a = 100 ;
// }

// var b = a 
// {
//     let b = 500 
// }

// console.log(b) // 100

//! what are closures 

// function parent(){
//     let p1;
//     p1 = p2 ;  //! not allowed 
//     function child(){
//         var p2 ;
//         p2 = 100 ;

//     }
// }

//console.log(typeof null) // object //! null is an object

//!  