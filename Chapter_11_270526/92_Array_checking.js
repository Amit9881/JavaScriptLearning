let arr = [1, 2, 3, 4, 5, 6];
let arr2 = Array.isArray([1, 2, 3, 4, 5, 6]);
console.log(arr2);//true

let s = Array.isArray(["a"]);
console.log(s);//true

let d = Array.isArray(1);
console.log(d);//false

console.log([80, 90, 85].every(s => s >= 70));//true
console.log(arr.every(s => s <= 7));//true

// Playwright API 
[200, 201, 203].every(statuscode => statuscode > 200);

// some — AT LEAST ONE must pass
[80, 60, 85].some(s => s < 70); // true
[80, 90, 85].some(s => s < 70); // false

//arrow : s => s >= 70