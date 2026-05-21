let statuscode = 200;
if (statuscode <= 299) {
    console.log("API succesful");
} else if (statuscode <= 399) {
    console.log("redirection requried");
} else if (statuscode <= 499) {
    console.log("client error");
} else if (statuscode <= 599) {
    console.log("server error");
} else {
    console.log("Invalid error");
}