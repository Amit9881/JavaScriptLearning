let a = 20;
let b = 30;
let c = "20";
let d = 30;

console.log(a == b);//false
console.log(b == c);//false
console.log(a == c);//true
console.log(b == d);//true
console.log("***************************");
console.log(a === b);//false
console.log(b === c);//false
console.log(a === c);//false
console.log(b === d);//true
console.log("************************");

console.log(true == 1);//true
console.log(false == 0);//true

console.log(true == "1");//true
console.log(false == "0");//true

console.log("####################");

console.log(true === 1);//false
console.log(false === 0);//false
console.log(true === "1");//false
console.log(false === "0");//false

console.log("$$$$$$$$$$$$$$$$$$");

console.log(5 != "5");//false
console.log(5 !== "5");//true