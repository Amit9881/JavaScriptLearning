let test = ["pass", "fail", "skip", "pass", "fail"];
let passed = 0;
let failed = 0;
let skipped = 0;
for (let i = 0; i < test.length; i++) {
    if (test[i] === "pass") {
        passed = passed + 1;
    } else if (test[i] === "fail") {
        failed = failed + 1;
    } else if (test[i] === "skip") {
        skipped = skipped + 1;
    } else {
        console.log("not found")
    }
}
console.log("passed = " + passed + "failed =" + failed + "skipped =" + skipped);