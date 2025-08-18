// let arr = [8,1,5,4,6,11]
// const ans = [];
// for(let i = 0; i < arr.length; i++) {
//     for(let j = i + 1; j < arr.length; j++) {
//         if(arr[i] + arr[j] == 10) {
//             ans.push(i); 
//             ans.push(j);
//             break; // Exit the inner loop once a pair is found 

//         }
//     }
// }
// console.log(ans);  //[ 3, 4 ]   

// console.log(isNaN("ahar")) //true 
// console.log(isNaN(10)) //false


//! long simple approch


// let str1 = "Ashar"
// let str2 = "Uchiha"
// let ans = ""
// let m = str1.length ;
// let n = str2.length;
// let i = 0;
// let j = 0;
// while(i<m && j < n){
//     ans += str1[i]
//     ans += str2[j]
//     i++;
//     j++; 
// }
// if(i==m){
//     while (j<n){
//         ans += str2[j];
//         j++;
//     }
// }
// if(j==n){
//     while (i<m){
//         ans += str1[i];
//         i++;
//     }
// }

// console.log(ans) // Output: "AUshcihar" 


//! shorter approch 
// let str1 = "Ashar";
// let str2 = "Uchiha";
// let ans = "";

// let m = str1.length;
// let n = str2.length;
// let len = Math.max(m, n); // longest string length

// for (let k = 0; k < len; k++) {
//   if (k < m) ans += str1[k];
//   if (k < n) ans += str2[k];
// }

// console.log(ans); // AUshcihar



// console.log({}== {}) // false
// console.log({} === {})  // false 