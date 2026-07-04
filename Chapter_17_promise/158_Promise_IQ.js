let p = new Promise(function (resolve, reject) {
    resolve(43);
});
p.then(function (value) {
    console.log("num", value);
});//num 43

console.log("*****************");

let p1 = new Promise(function (resolve, reject) {
    reject("got an error");
});
console.log("______________________.");
p1.catch(function (error) {
    console.log("issue", error);
});
//issue got an error

//console.log("______________________");

// let p2 = Promise.resolve(5);

// p2.then(function (val) {
//     return val * 10;
// }).then(function (val) {
//     console.log(val);
// })//50

console.log("00000000");


Promise.resolve(1).
    then(function (val) {
        console.log(val);//1
        return val + 1;

    }).then(function (val) {
        console.log(val);//2
        return val + 1;
    }).then(function (val) {
        console.log(val);//3
        console.log("************");
    });

Promise.resolve("start").
    then(function (val) {
        console.log(val);
        throw new Error("Broke in step 2");
    }).
    then(function () {
        console.log("this will not run");
    }).
    catch(function (error) {
        console.log("got an error;", error.message)
        console.log("***************new******")
    });//got an error; Broke in step 2


// 

Promise.reject("Test failed")
    .then(function (data) {
        console.log("Data:", data);
    })
    .catch(function (err) {
        console.log("Error:", err);
    })
    .finally(function () {
        console.log("Cleanup done");
    });
//     Error: Test failed
// Cleanup done

Promise.resolve("Resolve msg").then(function (msg) {
    console.log(msg);
});//Resolve msg

Promise.reject("Reject msg").catch(function (err) {
    console.log(err);
});//Reject msg

let t1 = Promise.resolve("Login test pass");
let t2 = Promise.resolve("Search test pass");
let t3 = Promise.resolve("logout test pass");

Promise.all([t1, t2, t3]).then(function (msg) {
    console.log(msg);
});//[ 'Login test pass', 'Search test pass', 'logout test pass' ]


let l1 = Promise.resolve("Pass");
let l2 = Promise.reject("fail");
let l3 = Promise.resolve("pass");

Promise.all([l1, l2, l3]).then(function (msg) {
    console.log(msg);
}).catch(function (err) {
    console.log(err);
});//fail


let t1 = Promise.resolve("PASS");
let t2 = Promise.reject("FAIL");
let t3 = Promise.resolve("PASS");

Promise.all([t1, t2, t3])
    .then(function (r) { console.log("All:", r); })
    .catch(function (err) { console.log("Stopped:", err); });

Promise.allSettled([
    Promise.resolve("API 200"),
    Promise.reject("API 500"),
    Promise.resolve("API 201")
]).then(function (results) {
    results.forEach(function (r) {
        console.log(r);
    });
});