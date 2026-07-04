let apicall = new Promise(function (resolve, reject) {
    reject("error");
});

apicall.then(function (data) {
    console.log("Sucess or resolve");
}).catch(function (error) {
    console.log("error catched");
});
