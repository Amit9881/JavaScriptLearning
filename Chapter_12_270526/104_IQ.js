function run(name, status, time) {
    return `${name},${status},${time}`;
};

let r = run("TC", "pass", 1000);
console.log(r);