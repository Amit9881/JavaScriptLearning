function openBrowser() {
    return new Promise(function (resolve) {
        // Code to open the Browser
        resolve("Open the Broweser");
    })
}

// function openBrowser(callback) {
//     setTimeout(function () {
//         console.log("Step 01: Chrome browser opened");
//         callback();
//     }, 500);
// }

function goToLogin() {
    return new Promise(function (resolve) {
        resolve("Login page loaded");
    });
}

function enterCredentials() {
    return new Promise(function (resolve) {
        resolve("Credentials entered");
    });
}

function clickLogin() {
    return new Promise(function (resolve) {
        resolve("Logged in successfully");
    });
}



/*openBrowser()
    .then(function (msg) {
        console.log("Step 1", msg);
        return goToLogin();
    }).then(function (msg) {
        console.log("Step 2 :", msg);
        return enterCredentials();
    }).then(function (msg) {
        console.log("Step 3 :", msg);
        return clickLogin();
    }).then(function (msg) {
        console.log("Step 4 :", msg);
    }).catch(function (error) {
        console.log("Error:", error);
    }).finally(function () {
        console.log("Done execution!");
    });*/

async function E2E() {
    let msg1 = await openBrowser();
    console.log("Step1 :", msg1);

    let msg2 = await goToLogin();
    console.log("Step2 :", msg2);

    let msg3 = await enterCredentials();
    console.log("Step3 :", msg3);

    let msg4 = await clickLogin();
    console.log("Step4 :", msg4);
};

E2E();
/*Step1 : Open the Broweser
Step2 : Login page loaded
Step3 : Credentials entered
Step4 : Logged in successfully*/