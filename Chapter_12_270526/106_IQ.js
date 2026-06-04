function statusCode(code) {
    if (code >= 200 && code < 300) return "success";
    if (code >= 400 && code < 500) return "error";
    if (code > 500) return "System error";
};
statusCode(202);
statusCode(404);
statusCode(501);
console.log(statusCode(200));//success


function Test(name) {
    console.log(`Running : ${name}`);
    //no return
};

let TC = Test("TC1");//Running : TC1
console.log(TC);//undefined
//function has no return type thats why it show undefined 
console.log("****************");

greet("Amit");//Hi Amit

function greet(name) {
    console.log(`Hi ${name}`);
};

console.log("****************");

console.log(meet("surya"));//Hi surya

function meet(name) {
    return `Hi ${name}`;
};
