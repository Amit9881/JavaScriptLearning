let arr = [1, 2, 3, 4, 5, 6];
let arr1 = arr.slice(2, 4);
console.log(arr);//[ 1, 2, 3, 4, 5, 6 ]
console.log(arr1);//[ 3, 4 ]
//slice create new array with (start index ,end index-1)
//can not change the arr

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

//splice also create new array but it change the original array