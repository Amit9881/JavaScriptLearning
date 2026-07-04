function getToken() {
    return Promise.resolve("got the Token");
};

let token = await getToken();
console.log(token);

// when ever function returns a promise we always use await

async function run() {
    console.log(await getToken());
};
run();