let side1 = 10;
let side2 = 20;
let side3 = 10;

if (side1 === side2 && side2 === side3) {
    console.log("these is equliateral triangle");
} else if ((side1 === side2) || (side2 === side3) || (side1 === side3)) {
    console.log("these is Isoceleus triangle");
} else {
    console.log("scalene triangle");
}
