class car {
    //CAB


    //constructor
    constructor(name) {
        this.name = name;
    }

    drive() {
        console.log("I an driving", this.name);
    }


}

const tesla = new car("I10");
tesla.drive();