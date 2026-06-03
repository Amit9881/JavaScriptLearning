//Normal function

function greet(name) {
    return `Hi ${name}`;
};
let r = greet("AMit");
console.log(r);//Hi AMit

//Arrow function
const r2 = (name2) => "Hi " + name2;
let r3 = r2("Surya");
console.log(r3);//Hi Surya

// If you want to make a normal function to arrow function. 
// Remove the keyword function, remove the keyword return, 
// remove the curly braces, and use the =>

const doubleNo = n => n * 2;
console.log(doubleNo(5));//10

const age = Age => console.log(`my Age is ${Age}`);
age(27);//my Age is 27
console.log("******************");
function add(a, b) {
    return a + b;

};
let a = add(3, 4);
console.log(a);//7

const add2 = (a, b) => console.log(a + b);
add2(4, 5);//9
console.log("***************");

function say() {
    console.log("Hi");//Hi
};
console.log(say());//Undefined

const say1 = () => console.log("Hi Amit");
const say2 = () => 'Hi';

let t1 = say1();//Hi Amit
console.log(t1);//undefined


const t = (name) => {
    const m = "Hi " + name;
    return m;
};
let y = t("John");
console.log(y);//Hi John