function retry(name, ...result) {
    console.log(name);
    console.log(result);
};
retry("TC", 1, 2, 3, 4);
//TC
//[ 1, 2, 3, 4 ]

retry("TC1", "amit", "surya", "baby");
//TC1
//[ 'amit', 'surya', 'baby' ]