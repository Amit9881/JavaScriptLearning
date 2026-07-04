/*let user = prompt("enter number :");

user = Number(num);

console.log(user);*/

//below code got ReferenceError: prompt is not defined
let num = prompt("Enter a number:");
num = Number(num);  // convert string to number

if (num % 2 === 0) {
    console.log(num + " is Even");
} else {
    console.log(num + " is Odd");
}