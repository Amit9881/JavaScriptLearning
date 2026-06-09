let a = [1, 2, 3];
let b = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(b[i][j]);
    }
    console.log("\n");//space
}