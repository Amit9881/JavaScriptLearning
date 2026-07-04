// let checkAuth = Promise.resolve("OK");
// let checkDb = Promise.resolve("DB is OK");
// let checkCache = Promise.resolve("Cache is OK");

// Promise.all([checkAuth, checkDb, checkCache]).then(function (results) {
//     console.log("All the checks are fine");
// });

// All the checks are fine

// Promise.all([
//     Promise.resolve("Ok"),
//     Promise.reject("Error"),
//     Promise.resolve("fine")
// ]).then(function (r) {
//     console.log(r)
// }).catch(function (error) {
//     console.log("Error encountered")
// })
//Error encountered

//in promise.all if all promise are resolved only then is executed
//if one of the promise is rejected the catch block is executed

Promise.allSettled([
    Promise.resolve("Ok"),
    Promise.reject("Not Ok"),
    Promise.resolve("Fine")
]).then(function (result) {
    result.forEach(function (r, i) {
        console.log("Test " + (i + 1) + ":", r.status, "-", r.value || r.reason);
    })

})
// Test 1: fulfilled - Ok
// Test 2: rejected - Not Ok
// Test 3: fulfilled - Fine
console.log("******************")
// Promise.allSettled([
//     Promise.resolve("Test A Passed!"),
//     Promise.reject("Test B failed"),
//     Promise.resolve("Test C passed")
// ]).then(function (results) {
//     results.forEach(function (r, i) {
//         console.log("Test " + (i + 1) + ":", r.status, "-", r.value || r.reason);
//     });
// })

// Test 1: fulfilled - Test A Passed!
// Test 2: rejected - Test B failed
// Test 3: fulfilled - Test C passed

// This is like a test report —
// you want results for ALL tests,
// not just stop at the first failure.