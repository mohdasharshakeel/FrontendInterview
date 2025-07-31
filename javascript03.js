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

let arr = [1,2,4,5];
arr.splice(arr.length-4, 3);
console.log(arr) 