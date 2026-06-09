let name = {
    fname: "amit",
    lname: "Surya"
};

let obj = {
    value: 0,
    add(a, b) {
        console.log(a + b);
    },
    sub(a, b) {
        console.log(a - b);
    }

};
obj.add(20, 10);//30
obj.sub(14, 7);//7
