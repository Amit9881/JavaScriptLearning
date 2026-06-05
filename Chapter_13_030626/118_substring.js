let str = "Login_Test_Pass_001";
// slice(start, end) — negative indexes supported

console.log(str.slice(0, 5));//Login
console.log(str.slice(11));//pass
console.log(str.slice(-3));//001

console.log(str.includes("Pass"));//true
console.log(str.includes("pass"));//false case sensitive

// substring(start, end) — no negatives (treats as 0)

console.log(str.substring(6, 10));//Test
console.log(str.substring(0));//Login_Test_Pass_001
console.log(str.substring(-3));//Login_Test_Pass_001