function add(a, b, c) {
    return a + b + c;
};

let num = [1, 2, 3];
console.log(add(...num));//6

console.log("*******************");


let response = [200, 201, 402];

function statuscode(...code) {
    return code.some(c => c >= 400);

};
console.log(statuscode(...response));//true