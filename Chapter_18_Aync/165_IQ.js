async function sayHello() {
    return "Hello QA!";
}

sayHello().then(function (msg) {
    console.log(msg)
})//Hello QA!

async function getStatus() {
    let status = await Promise.resolve(200);
    console.log("Status:", status);
};

getStatus();//Status: 200


async function flow() {
    let step1 = await Promise.resolve("enter mail");
    console.log(step1);

    let step2 = await Promise.resolve("enter password");
    console.log(step2);

    let step3 = await Promise.resolve("click on login");
    console.log(step3);
}

flow();

// enter mail
// enter password
// click on login
