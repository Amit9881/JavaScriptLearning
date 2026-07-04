let testResuil = ["pass", "fail", "fail", "skip", "pass"];

testResuil.forEach(function (result, index) {
    console.log("Test " + index + "=> " + result)
})
/*Test 0=> pass
Test 1=> fail
Test 2=> fail
Test 3=> skip
Test 4=> pass*/


// This is a perfect example of a synchronous callback where
//  the anonymous function will take the item 1 by 1,
//  it will take the index 1 by 1, it will take
//  the result 1 by 1, and print the value 1 by 1