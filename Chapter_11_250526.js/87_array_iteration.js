//different ways to iterate over arrays
let num = [23, 46, 45, 90, 345];
for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
}
/*23
46
45
90
345*/
console.log("******************");
for (no of num) {
    console.log(no);
}
/*23
46
45
90
345*/

console.log("**************");
num.forEach((i, index) => {
    console.log(i, index);
});
/*23 0
46 1
45 2
90 3
345 4*/
console.log("***********");
let name = ["Amit", "surya", "babu", "baby"];
for (let naav in name) {
    console.log(naav, "=", name[naav]);
};
/*0 = Amit
1 = surya
2 = babu
3 = baby*/

console.log("***********");

for (let [i, naav] of name.entries()) {
    console.log(i, naav);
};
/*0 Amit
1 surya
2 babu
3 baby*/