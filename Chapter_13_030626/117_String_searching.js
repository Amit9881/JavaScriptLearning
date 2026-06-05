let url = "https://github.com/Amit9881/JavaScriptLearning";

console.log(url.includes("com"));//true
console.log(url.includes(9881));//true
console.log(url.includes("john"));//false

console.log(url.startsWith("https"));//true
console.log(url.startsWith("com"));//false
console.log(url.endsWith("Learning"));//true

console.log(url.indexOf("A"));//19
console.log(url.lastIndexOf("a"));//40

console.log(url.indexOf("com"));//start of com 15
console.log(url.indexOf("x"));//-1 not present so -1

console.log(url.search(/9881/));//23
console.log(url.search(/git/));//8

// /regex/ - Regular EXPRESSION - These are nothing but A-patterns that you can find within
//  the strings automatically. 

