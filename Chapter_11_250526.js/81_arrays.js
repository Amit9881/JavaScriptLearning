//different ways to create arrays
let arrow = [24, 45, 45];
console.log(arrow);

let math = new Array(3);
math[0] = 1;
math[1] = 2;
math[2] = 3;
math[3] = 4;
math[4] = 5;

console.log(math);

let score = new Array(1, 2, 3);
console.log(score);

let test = Array.of(12, 13, 13, 14, 15);
console.log(test);

let change = Array.from("Hello");
//[ 'H', 'e', 'l', 'l', 'o' ]
let change1 = Array.from(219374893);
//[]
console.log(change);
console.log(change1);

let change2 = Array.from("12345678");
console.log(change2);
/*[
  '1', '2', '3',
  '4', '5', '6',
  '7', '8'
]*/