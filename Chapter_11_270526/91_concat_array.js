let arr = [1, 2, 4];
let arr2 = [3, 5, 8];

console.log(arr + arr2);//1,2,43,5,8

console.log(arr.concat(arr2));//[ 1, 2, 4, 3, 5, 8 ]
console.log(arr2.concat(arr));//[ 3, 5, 8, 1, 2, 4 ]

let d = [...arr, ...arr2];
console.log(d);//[ 1, 2, 4, 3, 5, 8 ]

console.log(arr.join("@"));