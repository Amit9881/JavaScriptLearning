let arr = [
    [1, 2, 3, 4]
];
//1 row, 4 column

//It is called these same rows and same column. - Grid
let arr2 = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];

console.log(arr2[0][0]);//10
console.log(arr2[2][2]);//90
//console.log(arr2[3][3]);
//TypeError: Cannot read properties of undefined (reading '3')

console.log(arr2.length);
console.log(arr2[0].length);