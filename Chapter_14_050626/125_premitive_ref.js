// Primitive vs Reference Types

let a = 10;
let b = a;
b = 90;
console.log(b);//90
console.log(a);//10

// Objects — copied by REFERENCE , call by ref. 
// Reference - object, array, function
let obj1 = { name: "Amit" };
let obj2 = obj1;
obj2.name = "surya";
console.log(obj2);//{ name: 'surya' }
console.log(obj1);//{ name: 'surya' }