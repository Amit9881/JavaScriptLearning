const gender = "Male";
console.log(gender);
//const gender = "female";
//SyntaxError: Identifier 'gender' has already been declared

//gender = "NA";
//TypeError: Assignment to constant variable.

function maleOrFemale() {
    console.log(gender);
    //const gender = "female";
    //console.log(gender);
    //ReferenceError: Cannot access 'gender' before initialization
    //gender = "female";
    //console.log(gender);
    //TypeError: Assignment to constant variable.

}

maleOrFemale();