//Objects
//Key & value

let s1 = { name: "amit", rollnu: 29 };
let s2 = { name: "surya", rollnu: 30 };

// Key will not be in the doubt quotes
// below key in doubt is actually JSON

let JSON_student4 = { "name": "Pramod", "age": 87, "phone": 987654320 };

let a = { status: "pass" };
console.log(a.status);//pass
console.log(a["status"]);//pass
console.log(a['status']);//pass

let b = a;
console.log(b.status);//pass
b.status = "fail";
console.log(a.status);//fail
console.log(b.status);//fail
console.log("***************");
let c = { status: "pass" };
let d = { status: "pass" };

console.log(c.status);//pass
console.log(d.status);//pass

console.log(c === d);//false
console.log(c == d);//false