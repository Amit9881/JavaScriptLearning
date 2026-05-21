# JavaScript Learning

Learning JavaScript basics with Playwright.

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
Switch without break — demonstrates fall-through behavior.

### 50_APIswitch.js
Switch used in an API/action-dispatch context.

### 51_SwitchGroup.js
Grouping multiple cases together (e.g., weekdays vs weekends).

### 52_IQ.js
Interview question: switch with non-primitive expressions.

### 53_IQ2.js
Interview question: default case placement and fall-through.

### 54_IQ3.js
Interview question on switch with type coercion.

### 55_IQ4.js
Interview question on switch with complex conditions.

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
