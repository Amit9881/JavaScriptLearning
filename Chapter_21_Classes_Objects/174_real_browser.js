class testcase {

    constructor(name, status, priority) {
        this.name = name;
        this.status = status;
        this.priority = priority;
    }

    display() {
        console.log(this.name + ":" + this.status + ":" + this.priority);
    }
}

let loginTest = new testcase("Login", "pass", "P0");
loginTest.display();
let logout = new testcase("logout", "skip", "p");
logout.display();