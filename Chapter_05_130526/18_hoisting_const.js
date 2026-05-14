//console.log(name);
//ReferenceError: Cannot access 'name' before initialization
const name = "amit";
console.log(name);

function say() {
    console.log(name);//amit

}
say();

function say1() {
    console.log(name);
    const name = "surya";
}

say1();