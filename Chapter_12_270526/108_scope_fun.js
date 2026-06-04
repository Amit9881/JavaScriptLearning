let env = "statging";//global scope

function config() {
    let env1 = "Testing";
    console.log(env1);//Testing //local scope
    console.log(env);//Statging//global scope
};

config();
console.log(env);//statging
console.log(env1);//ReferenceError: env1 is not defined