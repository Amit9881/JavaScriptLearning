//push/pop (end) and unshift/shift (beginning) operations
let names = ["amit", "surya"];
console.log(names);
//[ 'amit', 'surya' ]
//add at the end
names.push("soni");
console.log(names);
//[ 'amit', 'surya', 'soni' ]

//Remove at the end
names.pop();
console.log(names);
//[ 'amit', 'surya' ]

names.push(5, 6);
console.log(names);
//[ 'amit', 'surya', 5, 6 ]

//add at the begining
names.unshift("man");
console.log(names);
//[ 'man', 'amit', 'surya', 5, 6 ]

names.shift();
console.log(names);