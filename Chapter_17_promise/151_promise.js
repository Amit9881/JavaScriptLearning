let order = new Promise(function (resolve, reject) {
    let foodisReady = true;
    if (foodisReady) {
        resolve("food will be deliverd");
    } else {
        reject("food will not be deliverd");
    };
});

console.log(order);//Promise { 'food will be deliverd' }