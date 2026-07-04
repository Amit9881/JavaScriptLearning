function table(item, callme) {
    console.log("finding 1");
    console.log("finding 2");
    console.log("finding 3");
    console.log(item);
    callme();

};

function call() {
    console.log("call on 68237r9823");
};

table("pizza", call);
/*finding 1
finding 2
finding 3
pizza
call on 68237r9823*/

table("burger", function () {
    console.log("call me Amit");
});
/*finding 1
finding 2
finding 3
burger
call me Amit*/

table("moms", () => {
    console.log("call me surya");
});
/*finding 1
finding 2
finding 3
moms
call me surya*/
