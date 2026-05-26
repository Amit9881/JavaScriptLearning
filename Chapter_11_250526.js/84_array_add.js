let arr = [1, 23, 45, 68];
console.log(arr);
//[ 1, 23, 45, 68 ]
arr.push(99, 100);
console.log(arr);
//[ 1, 23, 45, 68, 99, 100 ]
arr.splice(2, 1);
console.log(arr);
//[ 1, 23, 68, 99, 100 ] delete from 2nd index

arr.splice(2, 0, 199);
console.log(arr);
//[ 1, 23, 199, 68, 99, 100 ] add at 2nd position

arr.splice(2, 5, 5999);
console.log(arr);
//[ 1, 23, 5999 ] remove from 2nd to 5th index and replace with  

let arr2 = [2, 4, 5, 6, 7, 8, 9, 10];
arr2.splice(3, 5, 599);
console.log(arr2);
//[ 2, 4, 5, 599 ]
arr2.splice(1, 0, 10)
console.log(arr2);
//[ 2, 10, 4, 5, 599 ]
arr2.splice(3, 0, 30);
console.log(arr2);
//[ 2, 10, 4, 30, 5, 599 ]