async function testapi() {
    try {
        let result = await Promise.reject("error 505");

    } catch {
        console.log("error");
    } finally {
        console.log("always printed");
    }
}
testapi();