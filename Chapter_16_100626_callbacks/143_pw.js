function TC(testname, callback) {
    console.log(testname);
    callback();
};


// import { test } from '@playwright/test';

TC("logintest", function () {
    console.log("testcase passed");
    //playwright code
});
/*logintest
testcase passed*/
