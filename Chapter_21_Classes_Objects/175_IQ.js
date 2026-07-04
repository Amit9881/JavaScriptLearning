class Browser {

    constructor(name) {
        this.name = name;
        this.isOpen = true;
        console.log(name + "launched");
    }
    start() {
        console.log("start the browser");
    }
    close() {
        console.log("close the browser");
    }
}

let chrome = new Browser("Chrome");
let firefox = new Browser("fireFox");

console.log(chrome.isOpen)