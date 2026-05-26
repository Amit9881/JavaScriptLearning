//do-while useful for retry logic — runs at least once
let retry = 0;
do {
    console.log("code executed");
    console.log("retrying...." + retry);
    retry++;
} while (retry <= 3);