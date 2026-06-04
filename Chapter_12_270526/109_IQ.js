let x1 = 67;

function num() {
    let x2 = 12;
    // console.log(x1);//67
    console.log(x2);//12

    function numInner() {
        let y = 24;
        // console.log(x1);//67
        console.log(x2);//12
        //console.log(y);
    };
    num();
    console.log(y);
};
//num();