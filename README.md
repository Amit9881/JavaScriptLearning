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
```
Demonstrates `var`, `let`, and `const` declarations, redeclaration, reassignment, and scope.

### 10_function.js
```js
function number() {
    console.log("numbering");
}
```
Basic function definition and reuse.

### 11_var.js
```js
var name = "amit";
```
Explores `var`'s global/function scope and redeclaration behavior.

### 12_let.js
```js
let age = 29;
```
Demonstrates `let` — block scoping, no redeclaration, but allows reassignment.

### 13_const.js
```js
const gender = "Male";
```
Shows `const` — block scoped, cannot be redeclared or reassigned.

### 14_hoisting.js
```js
console.log(brave); // undefined
var brave = "yes";
```
Compares hoisting behavior of `var` (hoisted as `undefined`) vs `let`/`const` (Temporal Dead Zone).

### 15_functionHoisting.js
```js
function isPossible() {
    console.log(game); // undefined
    var game = "mario";
}
```
Hoisting inside a function — `var` hoisted within function scope, `let`/`const` in TDZ.
