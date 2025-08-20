// What is IIFE 
// the function is passed as parameter to the function what is called - callback
// three type of pop-uo boxes in javascript - alter , confirm, prompt 
// how to i convert object into array - there are many ways to do this 

//const obj = { name : "ashar", age: 25, city: "SPN" };
//console.log(Object.values(obj)) //[ 'ashar', 25, 'india' ]
//console.log(Object.keys(obj)) // [ 'name', 'age', 'city' ]
//console.log(Object.entries(obj)) // [ [ 'name', 'ashar' ], [ 'age', 25 ], [ 'city', 'SPN' ] ]

//! swap two numbers without using third variable
// let a = 5, b = 10;
// [a, b] = [b, a];
// console.log(a, b); // 10 5 

// const arr = ["ashar", "har"]    
// console.log(arr[0].includes(arr[1])) // true
//? lekin agar "har" ki jagah "arh" hota to false hota is case me hme check krne ke liye custom function likhna padta
//? iske liye hme custom function likhna padega

// let isAllMatched = false
// for(let i = 0; i < arr[1].length; i++){
//     if(!(arr[0].includes(arr[1][i]))){
//         isAllMatched = false;
//         break;
//     }else{
//         isAllMatched = true;
//     }
// }

// isAllMatched ? console.log("All matched") : console.log("Not all matched"); 


// function func1(a=0, b, c){
   

// }
// function func2(a, b, c=0){
// }


// console.log(func1.length) //0
// console.log(func2.length) //2

console.log(subs(10, 2))
console.log(subs(10)(2))

function subs(a, b){
    if(!b){
        return function(c){
            return a - c;
        }
    }
    return a - b;
}
