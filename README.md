# JavaScript Learning

> A hands-on JavaScript learning repository with Playwright testing context — from basics to advanced concepts with real-world testing examples.

![GitHub last commit](https://img.shields.io/badge/last%20commit-june%202026-blue)
![GitHub repo size](https://img.shields.io/badge/repo%20size-15%20chapters-brightgreen)
![JavaScript](https://img.shields.io/badge/javascript-ES6%2B-yellow)

---

## Table of Contents

- [Chapter 01 — Hello World](#chapter-01)
- [Chapter 02 — Process & Variables](#chapter-02)
- [Chapter 03 — Identifier Rules & Comments](#chapter-03--identifier-rules--comments)
- [Chapter 04 — Variables, Functions & Hoisting](#chapter-04--variables-functions--hoisting)
- [Chapter 05 — Hoisting & Data Types](#chapter-05--hoisting--data-types)
- [Chapter 06 — Operators](#chapter-06--operators)
- [Chapter 07 — If/Else Conditional Logic](#chapter-07--ifelse-conditional-logic)
- [Chapter 08 — Switch Statement](#chapter-08--switch-statement)
- [Chapter 09 — User Input & Loops](#chapter-09--user-input-handling)
- [Chapter 10 — Loops (For, While, Do-While)](#chapter-10--loops-for-while-do-while)
- [Chapter 11 — Arrays](#chapter-11--arrays)
- [Chapter 12 — Functions](#chapter-12--functions-chapter_12_270526)
- [Chapter 13 — Strings](#chapter-13--strings-chapter_13_030626)
- [Chapter 14 — Objects](#chapter-14--objects-chapter_14_050626)
- [Chapter 15 — 2D Arrays](#chapter-15--2d-arrays-chapter_15_080626)

---

## Chapter 01

### Basics_01.js
```js
console.log("Hello, World!");
```

### Basics_02.js
```js
console.log("let me do it again");
```

## Chapter 02

### Basics_01_process.js
```js
console.log(process.platform);
console.log("let me try");
```

### Basics_07052026.js
```js
let name = "Surya";
let cityName = "Karad";

console.log("My name is " + name + " and I am from " + cityName);
```

## Chapter 03 — Identifier Rules & Comments

### 06_Identifier_Rule.js
```js
var $ = "Amit";
let _name = "Suryawanshi";
const age = 30;

//var 123 = 123;

var abc123 = 123;

var last_name = "Surname";
var last$name = "lastName";
var last123name = "last";

//var last name = "sury";
```

### 07_Identifier_Rule.js
```js
//Naming conventions

//camelCase

var firstName = "Amit";
let ageGroup = "below 35";
const isMarried = false;

//PascalCase

var JobProfile = "Tester";
let WorkExp = "3.5 years";
const CompanyName = "Nse";

//sneak_case

var max_number = 100;
let min_length = 0.001;
const dream_job = "good paid one";

//SCREAMING_SNACK_CASE
var FAV_MOVIE = false;
let GYM_GUY = true;


//Hungarian Notation
let strName = "John";
let bPositive = true;
let nNumber = false;
```

### 08_comments.js
```js
//one line comment marked by double slash

/* multiline comment 
by
backslash & star 
at the start
star & backslash 
at the end */


/* shrotcut for mutliline
comment is 
Shift + Altr + A */
```

## Chapter 04 — Variables, Functions & Hoisting

### 09_varletconst.js
```js
var v = "amit";
let age = 29;
const gender = "Male";

var name = "amit";//decleartion
var name = "surya"; //redecleartion
name = "ben";//reassignment 

var name = ["A", "B", "C"];
for (var i = 0; i < name.length; i++) {
    console.log(name[i]);
}

console.log(name[i]);

function say() {
    console.log("we can do it");
}

say();
```

### 10_function.js
```js
function number() {
    console.log("numbering");
}
//function is block of code , we use for code reusablity
//write once & use many times


number();
number();
```

### 11_var.js
```js
var name = "amit";//global scope
console.log(name);

function myName() {
    console.log("My name is " + name);
    var name = "surya";
    console.log("My name is " + name);
    if (true) {
        console.log("my name is " + name)
        var name = "ben";
        console.log(name);
    }
}

myName();

var name = "john";
console.log(name);
```

### 12_let.js
```js
let age = 29;
console.log(age);

/*let age = 30;
console.log(age);
SyntaxError : Identifier "age" has already been declared
*/

let trycount = 0;
console.log(trycount);
trycount = trycount + 1;
console.log(trycount);
trycount = trycount + 1;
console.log(trycount);


if (true) {
    console.log("True");
    let join = "yes";
}

//console.log(join);
//ReferenceError: join is not defined
```

### 13_const.js
```js
const gender = "Male";
console.log(gender);
//const gender = "female";
//SyntaxError: Identifier 'gender' has already been declared

//gender = "NA";
//TypeError: Assignment to constant variable.

function maleOrFemale() {
    console.log(gender);
    //const gender = "female";
    //console.log(gender);
    //ReferenceError: Cannot access 'gender' before initialization
    //gender = "female";
    //console.log(gender);
    //TypeError: Assignment to constant variable.

}

maleOrFemale();
```

### 14_hoisting.js
```js
console.log(brave);// undefined
var brave = "yes";
console.log(brave);

//console.log(petName);
//ReferenceError: Cannot access 'petName' before initialization
let petName = "Dog";
console.log(petName);

//console.log(cat);
//ReferenceError: Cannot access 'cat' before initialization
const cat = "maggie";
console.log(cat);
```

### 15_functionHoisting.js
```js
function isPossible() {
    console.log(game);//undefined
    var game = "mario";
    console.log(game);
    //console.log(game1);
    //ReferenceError: Cannot access 'cat' before initialization
    let game1 = "WWE";
    console.log(game1);
    game1 = "football";
    console.log(game1);
}

isPossible();
```

## Chapter 05 — Hoisting & Data Types

### 16_hoisting_var.js
```js
console.log(age);//undefined
console.log("my self amit");

var age = 30;
console.log(age);


function say() {
    console.log(name);
    var name = "Amit";
    console.log(name);
}

say();
```

### 17_hoisting_let.js
```js
//console.log(name);
//ReferenceError: Cannot access 'name' before initialization
let name = "amit";
let age = 30;//TDZ
let yes = true;//TDZ
let isMature = false;//TDZ
console.log(name);

function say() {
    console.log(name);//amit
    //let name = "surya";
    //console.log(name);

}
say();
function say1() {
    //console.log(name);
    //ReferenceError: Cannot access 'name' before initialization
    let name = "surya";
}
say1();
```

### 18_hoisting_const.js
```js
//console.log(name);
//ReferenceError: Cannot access 'name' before initialization
const name = "amit";
const age = 28;//TDZ
const study = true;//TDZ
const gneder = "Male";//TDZ
console.log(name);

function say() {
    console.log(name);//amit

}
say();

function say1() {
    console.log(name);
    //ReferenceError: Cannot access 'name' before initialization
    const name = "surya";
}

say1();
```

### 19_literals.js
```js
var name = "amit";
let age = 30;
const isMale = true;

var number = 99.99999999;
let get = ["A", "B"];

console.log(typeof (name));
console.log(typeof (age));
console.log(typeof (isMale));
console.log(typeof (number));
console.log(typeof (get));
```

### 20_null_undefined.js
```js
let name;//declaration
console.log(name);//undefined

let age = null;
console.log(age);//null

var stay;
console.log(stay);//undefined
console.log(typeof (stay));//undefined
var stay1 = null;
console.log(stay1);//null
console.log(typeof (stay1));//object
```

### 21_string.js
```js
let name = "Amit";
console.log(name);
console.log(typeof (name));

let age = "30";
console.log(age);
console.log(typeof (age));

var alpha = 'A';
console.log(alpha);
console.log(typeof (alpha));
```

### 22_template_literals.js
```js
let name = "Amit";
let intro = `Hi ${name} here`;
console.log(intro);

let userName = "Amit@223";
let key = "43";
let bod = "5596";
let check = `user name of ${key} is ${userName} and bod is ${bod}`;
console.log(check);
```

## Chapter 06 — Operators

### 23_assignment_operator.js
```js
let name = "Amit";
let age = 30;
let key = "AGH";

console.log(name);
console.log(age);
console.log(key);
```

### 24_arthimetic.js
```js
let a = 20;
let b = 5;

let sum = a + b;
console.log(sum);

let sub = a - b;
console.log(sub);

let mul = a * b;
console.log(mul);

let div = a / b;
console.log(div);
```

### 25_modules.js
```js
let a = 100;
let b = 50;
let c = 3;

console.log(a % b);
console.log(a % c);
console.log(b % c);
```

### 26_expoenational.js
```js
let a = 2;
let b = 3;

console.log(a ** b);
console.log(b ** a);
console.log(a ** a);
console.log(b ** b);
```

### 27_compound.js
```js
let a = 10;
a += 10;// a+10
console.log(a);

a -= 3;// a-3
console.log(a);

a *= 10;// a * 10
console.log(a);

a /= 17; //a /17;
console.log(a);
```

### 28_comaprsion.js
```js
let a = 20;
let b = 30;

console.log(a > b);
console.log(a < b);
console.log(a == b);
console.log(a === b);
console.log(a <= b);
console.log(a >= b);
```

### 29_strict_loose_comparison.js
```js
let a = 20;
let b = 30;
let c = "20";
let d = 30;

console.log(a == b);//false
console.log(b == c);//false
console.log(a == c);//true
console.log(b == d);//true
console.log("***************************");
console.log(a === b);//false
console.log(b === c);//false
console.log(a === c);//false
console.log(b === d);//true
```

### 30_IQ_loose_strict.js
```js
console.log(0 == "0");//true
console.log(0 === "0");//false
console.log(0 == null);//false
console.log(0 === null);//false
console.log(0 == "");//true
console.log(null == undefined);//true
console.log(null === undefined);//false
```

### 31_confusion_comparison.js
```js
// ==  → loose equality (type coercion, surprising)
// === → strict equality (no coercion, what you usually want)

console.log("" == 0);        // true
console.log("0" == 0);       // true
console.log("" === 0);       // false
console.log("0" === 0);      // false

console.log(null == undefined);   // true
console.log(null === undefined);  // false
console.log(null >= 0);           // true  (gotcha!)
console.log(null == 0);           // false

console.log(true == 1);      // true
console.log(true === 1);     // false
console.log(NaN == NaN);     // false

console.log([] == false);    // true
console.log([] == ![]);      // true
```

### 32_logical.js
```js
let a = 10;
let b = 20;
let c = 30;

if (a > b && b < c) {
    console.log("true");
}
else if (a < b || a > c) {
    console.log("false");
}
```

### 33_string_concatination.js
```js
let name = "Amit";
let lastName = "Suryawanshi";

console.log(`${name}` + `${lastName}`);

name += "Surya";
console.log(name);
```

### 34_ternary_operator.js
```js
let age = 20;

let votter = age >= 18 ? "will be votter" : "not a votter";

console.log(votter);


let inch = 10;

let ft = inch > 12 ? "grater than feet" : "less than feet";

console.log(ft);
```

### 35_typeOf.js
```js
let name = "amit";
let age = 30;
let isMale = true;
let cars = null;
let bikes = undefined;
let toys = ["a", "b"];

console.log(typeof (name));
console.log(typeof (age));
console.log(typeof (isMale));
console.log(typeof (cars));
console.log(typeof (bikes));
console.log(typeof (toys));
```

### 36_preIncrement.js
```js
let a = 10;
console.log(a);//10
a = ++a; //a become 11
console.log(a);//11
let b = ++a + ++a; // 11 then a become 12 then 12 add with 13 & finally
//a become 13
console.log(b)//25
console.log(a);//13
```

### 37_postIncrement.js
```js
let a = 10;
console.log(a);//10
a = a++;//1st a = 10 then a become 11
console.log(a);//10
let b = a++ + a++;
console.log(b);//21
console.log(a);//12
```

## Chapter 07 — If/Else Conditional Logic

### 38_evenodd_number.js
```js
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        console.log(`${num} is even`);
    } else {
        console.log(`${num} is odd`);
    }
}
```

### 39_grade.js
Grade calculation based on marks using if/else if chain.

### 40_leapyear.js
```js
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} is a leap year`);
} else {
    console.log(`${year} is not a leap year`);
}
```

### 41_If_else.js
Basic if/else syntax examples.

### 42_ifelseif.js
```js
if (condition1) {
    // block1
} else if (condition2) {
    // block2
} else {
    // default block
}
```

### 43_realifelse.js
Real-world nested if/else — login + role-based access (admin, editor, viewer).

### 44_APIIfelse.js
API-style if/else examples.

### 45_IQifelse.js
Interview-style if/else question — swapping variables with/without third variable.

### 46_realIfElse.js
Another real-world if/else scenario (grading system).

### 47_IQ.js
```js
// IQ: Predict output without running
let x = 0;
if (x = 5) console.log("true"); else console.log("false");
// Output: "true" (assignment inside condition)
```

### 59_taskAPIcode.js
```js
let statuscode = 200;
if (statuscode <= 299) {
    console.log("API succesful");
} else if (statuscode <= 399) {
    console.log("redirection requried");
} else if (statuscode <= 499) {
    console.log("client error");
} else if (statuscode <= 599) {
    console.log("server error");
} else {
    console.log("Invalid error");
}
```

### 60_TC.js
```js
let expected = "login"
let actual = "login";

if (expected === actual) {
    console.log("test case passed");
} else {
    console.log("test case failed");
}
```

### 61.bugSeverity.js
```js
let bug = 5;

if (bug >= 9) {
    console.log("critical bug");
} else if (bug >= 7) {
    console.log("high severity bug")
} else if (bug >= 4) {
    console.log("Medium severity bug");
} else if (bug >= 1) {
    console.log("low severity bug");
} else {
    console.log("Invalid error");
}
```

### 62_helathreport.js
```js
let healthscore = 50;
if (healthscore === 100) {
    console.log("green build");
} else if (healthscore >= 90) {
    console.log("stable");
} else if (healthscore >= 70) {
    console.log("Unstable");
} else {
    console.log("broken build");
}
```

## Chapter 08 — Switch Statement

### 48_switch.js
```js
let day = 3;
switch (day) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    case 4: console.log("Thursday"); break;
    case 5: console.log("Friday"); break;
    case 6: console.log("Saturday"); break;
    case 7: console.log("Sunday"); break;
    default: console.log("Invalid day");
}
```

### 49_noBreak.js
```js
let num = 1;
switch (num) {
    case 1:
        console.log("number one");

    case 2:
        console.log("number is two")

    default:
        console.log("not able to find number");
}
```
Switch without break — demonstrates fall-through behavior.

### 50_APIswitch.js
```js
let statuscode = 500;
switch (statuscode) {
    case 200:
        console.log("API is working");
        break;

    case 400:
        console.log("API is not working");
        break;

    case 500:
        console.log("system error");
        break;

    default:
        console.log("Unable to find");

}
```
Switch used in an API/action-dispatch context.

### 51_SwitchGroup.js
```js
let browser = "IE";
switch (browser) {
    case "chrome":
    case "opera":
    case "IE":
        console.log("chromium proj");
        break;

    case "firefox":
        console.log("mozilla proj");
        break;

    case "Internet":
        console.log("internet exporer");
        break;

    default:
        console.log("Internet not connected ");
}
```
Grouping multiple cases together.

### 52_IQ.js
```js
let fruit = "Apple";
switch (fruit) {
    case "Apple":
        console.log("One daily");

    case "banana":
        console.log("daily two");

    case "mango":
        console.log("sesonal");

    default:
        console.log("no fruits for the day");

}
```
Interview question: switch fall-through without break.

### 53_IQ2.js — Switch with boolean expression
```js
let testScore = 50;
switch (true) {
    case (testScore >= 90):
        console.log("grade A");
        break;

    case (testScore >= 80):
        console.log("Grade B");
        break;

    case (testScore >= 70):
        console.log("grade C");
        break;

    case (testScore >= 60):
        console.log("grade D");
        break;

    default:
        console.log("You are failed");

}
```
Using `switch(true)` with range conditions.

### 54_IQ3.js — Duplicate case values
```js
let x = 10;
switch (x) {
    case 10:
        let b = 1;
        console.log(b);
        break;

    case 10:
        let c = 3;
        console.log(c);
        break;
}
```
Interview question: duplicate case values (only first matches).

### 55_IQ4.js — Type coercion in switch
```js
let status = 0;

switch (status) {
    case false:
        console.log("status code false");
        break;

    case 0:
        console.log("status code is 0");
        break;
}
```
Interview question: switch uses strict comparison (`===`), so `false` and `0` are distinct.

## Chapter 09 — User Input Handling

### 56_userimnput.js
```js
let num = prompt("Enter a number:");
num = Number(num);
if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}
```

### 57_Node_readline.js
```js
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter your name: ", (name) => {
    console.log(`Hello, ${name}!`);
    rl.close();
});
```

### 58_prompt_sync.js
Using the `prompt-sync` npm package for synchronous user input in Node.js.

### 63_loginlogout.js
```js
let attempts = 2;
switch (attempts) {
    case 1:
        console.log("2 attempts left");
        break;
    case 2:
        console.log("1 attempts left");
        break;
    case 3:
        console.log("account lock")
        break;
    default:
        console.log("wrong account");
}
```

## Chapter 09 — Continued

### 64_test.js
```js
let test = ["pass", "fail", "skip", "pass", "fail"];
let passed = 0;
let failed = 0;
let skipped = 0;
for (let i = 0; i < test.length; i++) {
    if (test[i] === "pass") {
        passed = passed + 1;
    } else if (test[i] === "fail") {
        failed = failed + 1;
    } else if (test[i] === "skip") {
        skipped = skipped + 1;
    } else {
        console.log("not found")
    }
}
console.log("passed = " + passed + "failed =" + failed + "skipped =" + skipped);
```
Counting test results (pass/fail/skip) using a for loop.

### 65_test_APIcall.js
```js
let retry = "fail";
let max_attempts = 1;
do {
    retry === "fail";
    max_attempts++;
} while (max_attempts <= 5) {
    console.log(retry);
}
```
API retry logic using do-while loop.

## Chapter 10 — Loops (For, While, Do-While)

### 66_for_loop.js
```js
console.log("A");
console.log("B");
//to reduce repetaed task we use for loop
```
Introduction to loops — motivation to use for loops for repetitive tasks.

### 67_forLoop.js
```js
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```
Basic for loop printing 1 to 5.

### 68_forLoops.js
```js
for (let i = 1; i < 5; i++) {
    console.log(i);
}
//4 times loop runs
console.log("*****************");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
//5 times loop runs
```
Comparison of `<` vs `<=` in for loop conditions.

### 69_IQ.js
For loop interview questions — infinite loops, condition checks, and nested logic.

### 70_while.js
```js
while (i < 3) {
    console.log(i);
    i++;
}
```
Basic while loop (variable not initialized — assumes global).

### 71.while.js
```js
let i = 0;
while (i < 3) {
    console.log(i);
    i++;
}
```
While loop with proper initialization.

### 72_do_while.js
```js
let a = 5;
do {
    console.log(a);
    a++;
} while (a < 10);
```
Do-while loop printing 5 to 9.

### 73_dowhile.js
```js
let retry = 0;
do {
    console.log("code executed");
    console.log("retrying...." + retry);
    retry++;
} while (retry <= 3);
```
Do-while loop used for retry logic.

### 74_IQ.js
```js
let i = 5;
while (i > 1) {
    console.log(i);
    i--;
}
```
While loop counting down from 5 to 2.

### 75_IQ.js
```js
let i = 0;
do {
    console.log(i);
    i--;
} while (i > 0);
//0
```
Do-while with decrement — executes once before condition check.

### 76_continou.js
```js
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}
// 3 skipped
```
Using `continue` to skip iteration when i equals 3.

### 77_IQ.js
```js
let count = 10;
while (count < 5) {
    console.log(count);
    count++;
}
//condition falls so loop exited
```
While loop with false initial condition — body never executes.

### 78_taskQ1.js — Triangle Classifier
```js
let side1 = 10;
let side2 = 20;
let side3 = 10;

if (side1 === side2 && side2 === side3) {
    console.log("these is equliateral triangle");
} else if ((side1 === side2) || (side2 === side3) || (side1 === side3)) {
    console.log("these is Isoceleus triangle");
} else {
    console.log("scalene triangle");
}
```
Classifies a triangle as equilateral, isosceles, or scalene based on side lengths.

### 79_fizzBuzz.js
```js
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
```
Classic FizzBuzz from 1 to 100 using for loop and modulo conditions.

## Chapter 11 — Arrays

### 80_arrays.js
```js
let fruit = [];
console.log(fruit);
let numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]);
let mixed = ["amit", 'A', 24, 34.60, null];
```
Array creation using literal syntax, indexed access, and mixed data types.

### 81_arrays.js
```js
let arrow = [24, 45, 45];
let math = new Array(3);
let score = new Array(1, 2, 3);
let test = Array.of(12, 13, 13, 14, 15);
let change = Array.from("Hello");
```
Alternative array creation: constructor, `Array.of()`, and `Array.from()`.

### 82_array_access.js
```js
let name = ["amit", "surya", "medical"];
console.log(name[0]);   // amit
console.log(name.at(-1)); // medical (negative index)
name[1] = "sone";       // reassignment
```
Indexed access, `at()` with negative indices, and element modification.

### 83_arrays_additions.js
```js
let names = ["amit", "surya"];
names.push("soni");    // add to end
names.pop();            // remove from end
names.unshift("man");   // add to beginning
names.shift();          // remove from beginning
```
Stack/queue operations: push, pop, unshift, shift.

### 84_array_add.js
```js
let arr = [1, 23, 45, 68];
arr.splice(2, 1);         // remove 1 element at index 2
arr.splice(2, 0, 199);    // insert at index 2
arr.splice(2, 5, 5999);   // replace range
```
`splice()` — add, remove, and replace elements in place.

### 85_realExample.js — Browser Array
```js
let browser = ["chrome", "safari", "opera", "firefox"];
browser.pop();
let removed = browser.shift();
for (let i = 0; i < browser.length; i++) {
    if (browser[i] === "opera") console.log("opera is browser");
}
```
Real-world example: managing a browser list with pop, shift, and iteration.

### 86_searching.js
```js
let result = ["pass", "fail", "skip", "pass", "skip"];
result.indexOf("fail");          // 1
result.lastIndexOf("pass");      // 3
result.includes("skip");         // true
let nums = [10, 25, 30, 45];
nums.find(x => x > 20);          // 25
nums.findIndex(n => n > 20);     // 1
nums.findLast(n => n > 20);      // 45
```
Array search methods: indexOf, lastIndexOf, includes, find, findIndex, findLast.

### 87_array_iteration.js
```js
let num = [23, 46, 45, 90, 345];
for (let i = 0; i < num.length; i++) console.log(num[i]);
for (no of num) console.log(no);
num.forEach((i, index) => console.log(i, index));
for (let naav in name) console.log(naav, "=", name[naav]);
for (let [i, naav] of name.entries()) console.log(i, naav);
```
Iteration techniques: for loop, for-of, forEach, for-in, and entries().

### 88_transformArray.js
```js
let scores = [45, 82, 91, 60, 73];
let grades = scores.map(s => s > 70 ? "Pass" : "Fail");
let passing = scores.filter(s => s > 70);
let total = scores.reduce((a, b) => a + b, 0);
let nested = [[1, 2], [3, 4], [5]];
console.log(nested.flat());
```
Array transformations: map, filter, reduce, and flat.

### 89_Arrays.js
```js
let arr = ["amit", "sury", "baya", "Amit", "AMIT"];
arr.sort();
console.log(arr);//[ 'AMIT', 'Amit', 'amit', 'baya', 'sury' ]

let arr1 = [1, 2, 6, 3, 90, .09];
arr1.sort();
console.log(arr1);//[ 0.09, 1, 2, 3, 6, 90 ]

let arr2 = [1, 12, 10, 2, 30, 3, 21];
arr2.sort();
console.log(arr2);

arr2.sort((a, b) => a - b);
console.log(arr2);

arr2.sort((a, b) => b - a);
console.log(arr2);
```
Array sorting — default lexicographic sort, numeric ascending/descending using compare function.

### 90_Array_slicing.js
```js
let arr = [1, 2, 3, 4, 5, 6];
let arr1 = arr.slice(2, 4);
console.log(arr);//[ 1, 2, 3, 4, 5, 6 ]
console.log(arr1);//[ 3, 4 ]

let arr2 = arr.slice(4, 8);
console.log(arr2);//[ 5, 6 ]

let arr3 = arr.slice(0);
console.log(arr3);//[ 1, 2, 3, 4, 5, 6 ]

let arr4 = arr.slice(-3);
console.log(arr4);//[ 4, 5, 6 ]

let arr5 = [10, 20, 30, 40, 50];
let s = arr5.splice(1, 2);
console.log(arr5);//[ 10, 40, 50 ]
console.log(s);//[ 20, 30 ]
```
`slice()` vs `splice()` — slice creates a new array without modifying original; splice modifies the original array.

### 91_concat_array.js
```js
let arr = [1, 2, 4];
let arr2 = [3, 5, 8];

console.log(arr + arr2);//1,2,43,5,8

console.log(arr.concat(arr2));//[ 1, 2, 4, 3, 5, 8 ]
console.log(arr2.concat(arr));//[ 3, 5, 8, 1, 2, 4 ]

let d = [...arr, ...arr2];
console.log(d);//[ 1, 2, 4, 3, 5, 8 ]

console.log(arr.join("@"));
```
Array concatenation using `concat()`, spread operator (`...`), and `join()`.

### 92_Array_checking.js
```js
let arr = [1, 2, 3, 4, 5, 6];
let arr2 = Array.isArray([1, 2, 3, 4, 5, 6]);
console.log(arr2);//true

let s = Array.isArray(["a"]);
console.log(s);//true

let d = Array.isArray(1);
console.log(d);//false

console.log([80, 90, 85].every(s => s >= 70));//true
console.log(arr.every(s => s <= 7));//true

[200, 201, 203].every(statuscode => statuscode > 200);

[80, 60, 85].some(s => s < 70); // true
[80, 90, 85].some(s => s < 70); // false
```
Array checking with `Array.isArray()`, `every()`, and `some()` — includes Playwright API status code example.

## Chapter 12 — Functions (Chapter_12_270526/)

### 93_functionWithPara.js
```js
function sum(a, b) {
    console.log(a + b);
}
sum(3, 4);//7
sum(45, 67);//112
```
Function with parameters — passing arguments to a function.

### 94_funWithTemplateLitreal.js
```js
function name(name) {
    return `Hi ${name}`;
};

let n = name("Amit");
console.log(n);
//Hi Amit
```
Function using template literals for string interpolation.

### 95_funExp.js
```js
const r = function (name) {
    return `Hi ${name}`;
};

let r1 = r("Amit");
console.log(r1);//Hi Amit

function age(age) {
    return `age is ${age}`;
};
let s = age(27);
console.log(s);//age is 27

const name1 = function (name2) {
    return `Hi ${name2}`;
};
console.log(name1("surya"));
```
Function expression vs normal function declaration.

### 96_Arrow_fun.js
```js
function greet(name) {
    return `Hi ${name}`;
};
let r = greet("AMit");
console.log(r);//Hi AMit

const r2 = (name2) => "Hi " + name2;
let r3 = r2("Surya");
console.log(r3);//Hi Surya

const doubleNo = n => n * 2;
console.log(doubleNo(5));//10

const age = Age => console.log(`my Age is ${Age}`);
age(27);//my Age is 27

function add(a, b) {
    return a + b;
};
let a = add(3, 4);
console.log(a);//7

const add2 = (a, b) => console.log(a + b);
add2(4, 5);//9

function say() {
    console.log("Hi");
};
console.log(say());//Undefined

const say1 = () => console.log("Hi Amit");
const say2 = () => 'Hi';

let t1 = say1();//Hi Amit
console.log(t1);//undefined

const t = (name) => {
    const m = "Hi " + name;
    return m;
};
let y = t("John");
console.log(y);//Hi John
```
Arrow functions — concise syntax, implicit return, single param vs multiple params, block body vs expression body.

### 97_fun_basics.js
```js
function name() {
    console.log("Hi");
};

name();//Hi
```
Function basics — definition and calling.

### 98_Type1_basic.js
```js
function name() {
    console.log("Hi Man");
};
name();//Hi Man

let a = name();//Hi Man
//console.log(a);//undefined
```
Basic function — function without return stores `undefined` in variable.

### 99_funWithPara.js
```js
function greet(name) {
    console.log("Hi " + name);
};

greet("Amit");//Hi Amit
greet();//Hi Undefined

let r = greet("Surya");//Hi surya
console.log(r);//undefined

function age(a) {
    console.log("My Age is " + a);
};

age(27);//My Age is 27
age();//My Age is undefined
let b = age(28);//My Age is 28
console.log(b);//undefined
```
Function with parameter — calling without argument gives `undefined`.

### 100_funWithoutParamReturn.js
```js
function name() {
    console.log("My name");
    return "join";
};

let r = name();//My name
console.log(r);//join
```
Function without parameters but with a return value.

### 101_Arrowfun_real.js
```js
//check the API statusCode

function api(code) {
    if (code >= 200 && code <= 300) {
        console.log("API is fine");
    };
};
api(202);

const code = function (api) {
    if (api >= 200 && api <= 300) {
        console.log("api is Fine");
    };
};
code(204);

const api1 = (status) => {
    if (status >= 200 && status <= 300) {
        console.log("API IS FINE");
    };
};
api1(250);
```
Real-world arrow function example — checking API status codes. Also shows normal function and function expression for comparison.

### 102_IIFE.js
```js
(function () {
    console.log("HI");
})();

(function () {
    console.log("Playwright tests");
})();

(() => {
    console.log("arrow ");
})();
```
IIFE (Immediately Invoked Function Expression) — function runs as soon as it's defined. Includes arrow function variant.

### 103_default_para.js
```js
function retry(testcase, maxtry = 3, delay = 1000) {
    console.log(`${testcase},${maxtry},${delay}`);
};

retry("testD");
retry("testF", 5, 1500);
```
Default parameters — `maxtry` and `delay` fall back to defaults if not provided.

### 104_IQ.js
```js
function run(name, status, time) {
    return `${name},${status},${time}`;
};

let r = run("TC", "pass", 1000);
console.log(r);
```
Function returning a formatted string — basic TC run output.

### 105_rest_param.js
```js
function retry(name, ...result) {
    console.log(name);
    console.log(result);
};
retry("TC", 1, 2, 3, 4);
//TC
//[ 1, 2, 3, 4 ]

retry("TC1", "amit", "surya", "baby");
//TC1
//[ 'amit', 'surya', 'baby' ]
```
Rest parameters (`...result`) collect remaining arguments into an array.

### 106_IQ.js
```js
function statusCode(code) {
    if (code >= 200 && code < 300) return "success";
    if (code >= 400 && code < 500) return "error";
    if (code > 500) return "System error";
};
console.log(statusCode(200));

function Test(name) {
    console.log(`Running : ${name}`);
};

let TC = Test("TC1");
console.log(TC);//undefined — no return

greet("Amit");//Hoisting works

function greet(name) {
    console.log(`Hi ${name}`);
};

console.log(meet("surya"));//Works

function meet(name) {
    return `Hi ${name}`;
};
```
Interview questions — function hoisting, return vs no return (undefined), and early return pattern.

### 107_speed.js
```js
function add(a, b, c) {
    return a + b + c;
};

let num = [1, 2, 3];
console.log(add(...num));//6

let response = [200, 201, 402];

function statuscode(...code) {
    return code.some(c => c >= 400);
};
console.log(statuscode(...response));//true
```
Spread operator (`...`) to unpack arrays into function arguments.

### 108_scope_fun.js
```js
let env = "statging";

function config() {
    let env1 = "Testing";
    console.log(env1);
    console.log(env);
};

config();
console.log(env);
console.log(env1);//ReferenceError
```
Global vs local scope — variables declared inside a function are not accessible outside.

### 109_IQ.js
```js
let x1 = 67;

function num() {
    let x2 = 12;
    console.log(x2);

    function numInner() {
        let y = 24;
        console.log(x2);
    };
    num();
    console.log(y);//ReferenceError
};
```
Nested function scope — inner functions can access outer variables, but not vice versa.

### 110_closure.js
```js
function outer() {
    let msg = "hello";
    console.log("outer call");
    function inner() {
        console.log(msg);
    };
    return inner;
};

let call = outer();
call();
```
Basic closure — inner function retains access to outer function's variables even after the outer function returns.

### 111_closure.js
```js
function counter(start = 0) {
    let count = start;
    return {
        increment() { count++ },
        decrement() { count-- },
        get() { return count }
    };
};

let mark = counter(0);
mark.increment();
mark.increment();
console.log(mark.get());//2
mark.decrement();
console.log(mark.get());//1
```
Closure-based counter with `increment`, `decrement`, and `get` methods.

### 112_Api_closer.js
```js
function makeRetryTracker(max) {
    let attempts = 0;
    function tryAgain(testName) {
        attempts++;
        if (attempts > max) {
            return `${testName} exceeded max retries (${max})`;
        }
        return `Attempt ${attempts}/${max} for ${testName}`;
    }
    return tryAgain;
}

let retry = makeRetryTracker(3);
console.log(retry("Login"));
console.log(retry("Login"));
console.log(retry("Login"));
console.log(retry("Login"));
```
Real-world closure — retry tracker that remembers attempt count across calls.

### 113_higher_fun.js
```js
function runWithLoggin(testFn, testName) {
    let result = testFn();
    return result;
}

function loginTest() {
    return "pass";
}

function loginTestFAILED() {
    return "fail";
}

runWithLoggin(loginTest, "Login Test");
runWithLoggin(loginTestFAILED, "Dashboard Failed Test");
```
Higher-order function — `runWithLoggin` takes a function as an argument and calls it.

### 114_pure_fun.js
```js
// Pure function — same input always gives same output, no side effects
function calculatePassRate(total, passed) {
    return ((passed / total) * 100).toFixed(2);
}

console.log(calculatePassRate(10, 7));
console.log(calculatePassRate(10, 7));

// Impure function — depends on external state
function isPassing(score) {
    return score >= threshold;
}

let threshold = 70;
console.log(isPassing(threshold));

threshold = 50;
console.log(isPassing(threshold));
```
Pure vs impure functions — pure functions have no side effects and are predictable; impure functions depend on external variables.
```

## Chapter 13 — Strings (Chapter_13_030626)

### 115_String.js
```js
let name = "Amit";
console.log(name);
let city = "Karad";
console.log(city);
console.log(typeof name);
```
String basics — creating strings with double quotes and single quotes.

### 116_String_properties.js
```js
let name = "Amit Suryawanshi";
console.log(name.length);
console.log(name[0]);
console.log(name.at(-1));
```
String properties: `.length`, bracket notation access, and `.at()` for negative indexing.

### 117_String_searching.js
```js
let str = "JavaScript is awesome";
console.log(str.indexOf("a"));          // 1
console.log(str.lastIndexOf("a"));      // 3
console.log(str.includes("Script"));    // true
console.log(str.startsWith("Java"));    // true
console.log(str.endsWith("some"));      // false
```
String search methods — `indexOf`, `lastIndexOf`, `includes`, `startsWith`, `endsWith`.

### 118_substring.js
```js
let str = "JavaScript";
console.log(str.substring(0, 4));  // Java
console.log(str.slice(0, 4));      // Java
console.log(str.slice(-6));        // Script
```
Extracting parts of a string — `substring()` and `slice()` (supports negative indices).

### 119_transform.js
```js
let str = "  Hello World  ";
console.log(str.trim());
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.replace("World", "JS"));
console.log("a,b,c".split(","));
```
String transformation — `trim()`, `toUpperCase()`, `toLowerCase()`, `replace()`, `split()`.

### 120_SC.js
```js
let expected = "Welcome";
let actual = "Welcome";
let status = expected === actual ? "pass" : "fail";
console.log(status); // pass
```
String comparison for test case validation using strict equality and ternary operator.
```

## Chapter 14 — Objects (Chapter_14_050626)

### 121_objects.js
```js
let user = {
    name: "Amit",
    age: 30,
    isActive: true
};
console.log(user.name);
```
Object basics — creating objects with key-value pairs and accessing properties.

### 122_obj2.js
Object creation and property access with dot and bracket notation.

### 123_object_creation.js
```js
let car = new Object();
car.brand = "Toyota";
car.model = "Camry";
```
Object creation using the `new Object()` constructor pattern.

### 124_obj_real.js
Real-world object example — modeling a test case with properties like name, status, and duration.

### 125_premitive_ref.js
```js
// Primitives are copied by value
let a = 10;
let b = a;
b = 20;
console.log(a); // 10

// Objects are copied by reference
let obj1 = { value: 10 };
let obj2 = obj1;
obj2.value = 20;
console.log(obj1.value); // 20
```
Primitive vs reference types — how values and references behave differently.

### 126_obj_exp.js
Using expressions and computed property names in objects.

### 127_IQ.js
Interview question — object mutation, copying, and reference behavior.

### 128_object_fun.js
```js
let calculator = {
    add(a, b) { return a + b; },
    subtract(a, b) { return a - b; }
};
```
Objects with methods — functions as object property values.

### 129_obj_decunstruction.js
```js
let person = { name: "Amit", age: 30 };
let { name, age } = person;
console.log(name); // Amit
console.log(age);  // 30
```
Object destructuring — unpacking object properties into variables.

### 130_speed.js
Object property access performance and shorthand property names.

### 131_onj_set_get_method.js
```js
let user = {
    firstName: "Amit",
    lastName: "Suryawanshi",
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(name) {
        [this.firstName, this.lastName] = name.split(" ");
    }
};
```
Getters and setters — computed properties with `get` and `set`.

### 132_IQ.js
Interview question — getter/setter behavior and property descriptors.

### 133_obj_real.js
Real-world object example — test configuration object with environment settings.

### 134_let_const_obj.js
```js
const obj = { name: "Amit" };
obj.name = "Surya"; // Allowed — const prevents reassignment, not mutation
// obj = {}; // TypeError
```
`const` with objects — mutation is allowed but reassignment is not.

## Chapter 15 — 2D Arrays (Chapter_15_080626)

### 135_2d_array.js
```js
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[0][1]); // 2
```
2D array basics — creating and accessing nested arrays.

### 136_2d.js
```js
let grid = Array.from({ length: 3 }, () => Array(3).fill(0));
```
Creating 2D arrays dynamically using `Array.from()`.

### 137_real.js
Real-world 2D array example — test data matrix with rows and columns.

### 138_2d_fn.js
```js
function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            console.log(matrix[i][j]);
        }
    }
}
```
Iterating over 2D arrays using nested for loops.

### 139_IQ.js
Interview question — 2D array traversal, diagonal sum, and transformation.

---

## Progress

| Chapter | Topic | Status |
|---------|-------|--------|
| 01 | Hello World | ✅ |
| 02 | Process & Variables | ✅ |
| 03 | Identifier Rules & Comments | ✅ |
| 04 | Variables, Functions & Hoisting | ✅ |
| 05 | Hoisting & Data Types | ✅ |
| 06 | Operators | ✅ |
| 07 | If/Else Conditional Logic | ✅ |
| 08 | Switch Statement | ✅ |
| 09 | User Input Handling | ✅ |
| 10 | Loops (For, While, Do-While) | ✅ |
| 11 | Arrays | ✅ |
| 12 | Functions | ✅ |
| 13 | Strings | ✅ |
| 14 | Objects | ✅ |
| 15 | 2D Arrays | ✅ |
```
