// let n = 5 ;
// let res = n++ + ++n ;
// console.log(res )

// let k = 5 
// let res1  = ++k + ++k 
// console.log(res1) // 13 

///! deep copy and shallow copy
let obj = {
    name : "ashar",
    age : 20,
    address : {
        city : "soul socity"
    }
}

let obj2 = JSON.parse(JSON.stringify(obj)) // deep copy 


