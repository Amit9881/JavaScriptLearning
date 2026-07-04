function retry(testcase, maxtry = 3, delay = 1000) {
    console.log(`${testcase},${maxtry},${delay}`);
};

retry("testD");//testD,3,1000
//taking default parameters
retry("testF", 5, 1500);//testF,5,1500
//taking modified parameter