let testrun = new Promise(function (resolve, reject) {
    reject("error");
});

testrun.then(function (run) {
    console.log("run succeful");
}).catch(function (notRun) {
    console.log("Not Run");//Not Run
}).finally(function () {
    console.log("Always run");//Always run
})