function print() {
    console.log("Hi print finction");
};

function cb(item, callback) {
    console.log("Hi cb function");
    callback();
};

//1st way
cb("pizza", print);
/*Hi cb function
Hi print finction*/

//2nd way
cb("burger", function () {
    console.log("2nd way of callback");
});
/*Hi cb function
2nd way of callback*/

//3rd way
cb("moms", () => {
    console.log("3rd way of callback");
});

/*Hi cb function
3rd way of callback*/
