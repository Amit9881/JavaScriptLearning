if (42) {
    console.log("number is truethy");
}
if ("hello") {
    console.log("word is truthy");
}
if ([]) console.log("empty array is truthy");
if ({}) console.log("empty object are truthy");

if ("") console.log("false statement");
if (NaN) console.log("NaN is false");
if (null) console.log("null is false");
if (undefined) console.log("undefined is false");
if (0) console.log("zero also false");

//any nuber is true 
//0 is false

let num = 0;
if (num) {
    console.log("number is non zero");
} else {
    console.log("number is zero");
}