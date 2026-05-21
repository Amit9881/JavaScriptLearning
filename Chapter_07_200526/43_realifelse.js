let islogin = false;
user = "admin";

if (islogin) {
    if (user === "admin") {
        console.log("welcome admin");
    } else if (user === "editor") {
        console.log("welcome editor");
    } else if (user == "viewer") {
        console.log("Welcome viewer");
    } else {
        console.log("sorry what is your role");
    }
} else {
    console.log("you are not loggin");
}