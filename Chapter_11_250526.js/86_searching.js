let result = ["pass", "fail", "skip", "pass", "skip"];

console.log(result.indexOf("fail"));//1
console.log(result.indexOf("skip"));//2


console.log(result.lastIndexOf("pass"));//3
console.log(result.lastIndexOf("fail"));//1

console.log(result.includes("error"));//false
console.log(result.includes("skip"));//true


/*let num = [2, 3, 4, 5, 6, 7, 8, 9, 1];
let r = num.find(x => x >= 5);//5
let s = num.find(x => x > 5);
console.log(r);
console.log(s);//6 */

let nums = [10, 25, 30, 45];
let r = nums.find(x => x > 20);
console.log(r);//25

// findIndex
console.log(nums.findIndex(n => n > 20)); // 1

console.log(nums.findLast(n => n > 20)); // 45 
console.log(nums.findLastIndex(n => n > 20));// 3