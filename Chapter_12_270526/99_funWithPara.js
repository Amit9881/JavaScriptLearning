function greet(name) {
    console.log("Hi " + name);
};

greet("Amit");//Hi Amit
greet();//Hi Undefined

let r = greet("Surya");//Hi surya
console.log(r);//undefined

function age(a) {
    console.log("My Age is " + a);
};

age(27);//My Age is 27
age();//My Age is undefined
let b = age(28);//My Age is 28
console.log(b);//undefined