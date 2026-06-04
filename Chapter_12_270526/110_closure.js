function outer() {
    let msg = "hello";
    console.log("outer call");
    function inner() {
        console.log(msg);
    };
    return inner;
};

let call = outer();
call();
//outer call
//hello

inner();//we can not directly call inner fun