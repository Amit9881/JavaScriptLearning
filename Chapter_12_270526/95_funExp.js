const r = function (name) {
    return `Hi ${name}`;
};

let r1 = r("Amit");
console.log(r1);//Hi Amit

//let r2 = r(Rahul);
//console.log(r2);//ReferenceError: Rahul is not defined

//Normal function
function age(age) {
    return `age is ${age}`;
};
let s = age(27);
console.log(s);//age is 27

//function as experssion

const name1 = function (name2) {
    return `Hi ${name2}`;
};
console.log(name1("surya"));//Hi surya
