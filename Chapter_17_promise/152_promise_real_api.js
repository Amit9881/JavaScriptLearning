let apicall = new Promise(function (resolve, reject) {
    resolve({
        status: 200, user: "Amit"
    })
});

apicall.then(function (response) {
    console.log(response.status);//200
});