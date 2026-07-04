let apicall = new Promise(function (resolve, reject) {
    reject("500 Error");
});

apicall.then(function (data) {
    console.log("sucess");
}).catch(function (error) {
    console.log(error);//500 Error
})