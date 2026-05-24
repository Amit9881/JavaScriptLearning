let retry = "fail";
let max_attempts = 1;

do {
    retry === "fail";
    max_attempts++;

} while (max_attempts <= 5) {
    console.log(retry);
}