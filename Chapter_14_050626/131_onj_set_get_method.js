const user = {
    firstname: "AMit",
    lastname: "surya",
    get FullName() {
        return this.firstname + this.lastname;
    },
    set FullName(value) {
        [this.firstname, this.lastname] = value;
    }
};

// Objects - JS {}
// Class and Object 
// this. it means current value in the Object.

console.log(user.FullName);//AMitsurya
user.FullName = "John Cena";
console.log(FullName);


// class User{
//     firstname
//     lastName,
//     fullName(){

//     }
// }