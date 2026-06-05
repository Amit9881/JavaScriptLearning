let str = "  Hello, World!  ";

console.log(str.toUpperCase());//HELLO, WORLD!
console.log(str.toLowerCase());//hello, world!

console.log(str.trim());// rempve white spaces
console.log(str.trimEnd());//remove at the end 
console.log(str.trimStart());//remove at the start

let msg = "Test: FAIL. Retry: FAIL.";
console.log(msg.replace("FAIL", "PASS"));//Test: PASS. Retry: FAIL.

console.log(msg.replaceAll("FAIL", "PASS"));//Test: PASS. Retry: PASS.


console.log(msg.replace(/FAIL/g, "PASS"));

// Concatenation
"Hello" + " " + "World";
"Hello".concat(" ", "World");
`${"Hello"} ${"World"}`;

let url = "https://app.vwo.con?app=pramod";
console.log(url.replace(/app/g, "qa"));

let r = "pass,fail,skip".split(",");
console.log(r);

let rr = "test_login_pass".split("_").join(" ");
console.log(rr);

let parts = ["2024", "03", "07"];
let date = parts.join("-");
console.log(date);