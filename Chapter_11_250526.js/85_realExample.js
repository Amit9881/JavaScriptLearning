//real-world: managing browser list with array methods
let browser = ["chrome", "safari", "opera", "firefox"];
console.log(browser.length);//4

console.log(browser);

browser.pop();
console.log(browser);
//[ 'chrome', 'safari', 'opera' ]

let removed = browser.shift();
console.log(browser);//[ 'safari', 'opera' ]
console.log(removed);//chrome

for (let i = 0; i < browser.length; i++) {
    console.log(browser[i]);
    if (browser[i] === "opera") {
        console.log("opera is browser");
    }
}