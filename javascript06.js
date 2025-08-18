// Callback funcations
// function abc(fn){
//  fn(); // calling the callback function
// }
// function fn(){
//     console.log("the callback function is called");
// }
// abc(fn)

//! duplicate elements in an array

let arr = [1, 2, 3, 4, 5, 1, 2, 3];

function dup(arr){
    let res = []
    let n = arr.length; 

    for(let i = 0; i<n; i++){
        for(let j = i +1 ; j < n; j++){
            if(arr[i]== arr[j]){
                res.push(arr[i])
            }
        }
    }
    return res;
}

console.log(dup(arr)) // [ 1, 2, 3 ]



//  let arr = [1, 2, 3, 4, 5, 1, 2, 3];

// let seen = new Set();
// let duplicates = arr.filter(item => {
//   if (seen.has(item)) {
//     return true; // agar pehle se mila to duplicate hai
//   }
//   seen.add(item);
//   return false;
// });

// console.log(duplicates); // [1, 2, 3]

