let bug = 5;

if (bug >= 9) {
    console.log("critical bug");
} else if (bug >= 7) {
    console.log("high seveirty bug")
} else if (bug >= 4) {
    console.log("Medium severity bug");
} else if (bug >= 1) {
    console.log("low severity bug");
} else {
    console.log("Invalid error");
}