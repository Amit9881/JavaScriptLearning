function retry(testcase, maxtry = 3, delay = 1000) {
    console.log(`${testcase},${maxtry},${delay}`);
};

retry("testD");
retry("testF", 5, 1500);