let cfg = {};

cfg.browser = "chrome";
cfg.timeout = 3000;
cfg.testName = "loginTest";
console.log(cfg);//{ browser: 'chrome', timeout: 3000, testName: 'loginTest' }

//delete cfg.browser;
//console.log(cfg);//{ timeout: 3000, testName: 'loginTest' }

if (cfg.browser === "chrome") {
    console.log(`execute ${cfg.testname}`);//execute undefined
}

