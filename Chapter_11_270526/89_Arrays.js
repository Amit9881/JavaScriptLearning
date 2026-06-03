let arr = ["amit", "sury", "baya", "Amit", "AMIT"];
arr.sort();
console.log(arr);//[ 'AMIT', 'Amit', 'amit', 'baya', 'sury' ]

let arr1 = [1, 2, 6, 3, 90, .09];
arr1.sort();
console.log(arr1);//[ 0.09, 1, 2, 3, 6, 90 ]

let arr2 = [1, 12, 10, 2, 30, 3, 21];
arr2.sort();
console.log(arr2);
/*[
   1, 10, 12, 2,
  21,  3, 30
]*/

arr2.sort((a, b) => a - b);
console.log(arr2);
/*[
   1,  2,  3, 10,
  12, 21, 30
]*/

arr2.sort((a, b) => b - a);
console.log(arr2);
/*[
  30, 21, 12, 10,
   3,  2,  1
]*/