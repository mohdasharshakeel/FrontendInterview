// let arr = [,,,] //! 3
// let arr2 = [1,2,3,4] //!4
// let arr3 = [[1,2,3],[1,2,3]] //! 2

// let arr = [34,3453,34,34,75,345,23,42,34]
// console.log(arr.sort((a,b)=>(a-b))) // [23, 34, 34, 34, 42, 75, 345, 3453] //! accending order
// console.log(arr.sort((a,b)=>(b-a))) // [3453, 345, 75, 42, 34, 34, 34, 23] //! decending order

// let arr =[1,2,3,4,5,]
// let arr2 = arr.map((item)=> item > 2 ) // console.log(arr2) // [false, false, true, true, true]
// console.log(arr2)


//! slice and splice
// let arr = [1,2,3,4,5]
// console.log(arr.slice(1,3)) // [2, 3] //! slice does not change the original array [ new array ]
// console.log(arr) // [1, 2, 3, 4, 5]
// console.log(arr.splice(1,3)) // [2, 3, 4] //! splice changes the original array
// console.log(arr) // [1, 5] //! splice removes the elements from the original array [ changes the original array ]
 
// let arr = [1,2,3,4,5]

//! way to empty an array 
let arr = [1,2,3,4,5] 
// arr.length = 0 // console.log(arr) // [] //! this is the best way to empty an array
// arr = [] // console.log(arr) // [] //! this is also a way to empty
// arr.splice(0, arr.length) // console.log(arr) // [] //! this is also a way to empty an array
// arr.pop() // console.log(arr) // [1, 2, 3, 4] //! this is not a good way to empty an array
// arr.shift() // console.log(arr) // [2, 3, 4, 5] //! this is not a good way to empty an array

//! multiple way to create on array object 
// let arr = new Array(1,2,3,4,5) // console.log(arr) // [1, 2, 3, 4, 5] //! this is a way to create an array object
// let arr = Array.of(1,2,3,4,5) // console.log(arr) // [1, 2, 3, 4, 5] //! this is also a way to create an array object
// let arr = Array.from({length: 5}, (_, i) => i + 1) // console.log(arr) // [1, 2, 3, 4, 5] //! this is also a way to create an array object
// let arr = Array.from({length: 5}, (_, i) => i + 1) // console.log(arr) // [1, 2, 3, 4, 5] //! this is also a way to create an array object
// let arr = Array.from({length: 5}, (_, i) => i + 1) // console.log(arr) // [1, 2, 3, 4, 5] //! this is also a way to create an array object

//! Unique values in an array
// let arr = [1,2,3,4,5,1,2,3,4,5]
// let uniqueArr = [...new Set(arr)] // console.log(uniqueArr) // [1, 2, 3, 4, 5] //! this is a way to get unique values in an array
// console.log(uniqueArr)

// function abc(a,b,c){

// }
// function pqr(a=0,b,c){

// }
// console.log(abc.length) // 3 //! kyuki koi default value nahi hai
// console.log(pqr.length) // 0 //! default ke bad parameter ki length 0 ho jati hai 

// console.log([]==[]) // false //! 
// console.log([]===[]) // false //! 
// let str = "this is ashar"
// // Step-by-step:
// let result = str
//   .split(" ")                     // ["this", "is", "ashar"]
//   .map(word => 
//     word.charAt(0).toUpperCase() + word.slice(1)  // Capitalize first letter
//   )
//   .join("\n");                    // Join with newline

// console.log(result);

// console.log(typeof NaN)
// console.log(NaN === NaN) // false //! NaN is not equal to itself
// console.log(NaN == NaN) // false //! NaN is not equal to itself
// console.log(typeof null) // object //! null is an object


// var a = 10
// console.log(++a) //! 11
// console.log(a++) //! 11
// console.log(a) //! 12


//* React 
//? class component vs functional component
//? any other way to to implement react in our project without using CDN 
//? npm i 
//? transtive dependencies 
//? dev dependencies vs dependencies 
//? tiled vs corrot 
//? JSX are understood by browser or not 
//? Babbles
//? Higher order component
//? custom hook
//? feature of react 18 
//? 