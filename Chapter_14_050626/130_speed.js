let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };

const add = { ...obj1 };
console.log(add);// a: 1, b: 2 }

let cfg = { name: "amit", age: 28 };
console.log(cfg);//{ name: 'amit', age: 28 }
cfg.name = "surya";
cfg.age = 30;
cfg.city = "karad";
console.log(cfg);//{ name: 'surya', age: 30, city: 'karad' }

cfg = { name: "baby" };
console.log(cfg);//{ name: 'baby' }


const cfg1 = { name: "amit", age: 28 };
console.log(cfg1);//{ name: 'amit', age: 28 }
cfg1.name = "surya";
cfg1.age = 30;
cfg1.city = "karad";
console.log(cfg1);//{ name: 'surya', age: 30, city: 'karad' }

//cfg1 = { name: "baby" };//TypeError: Assignment to constant variable.
console.log(cfg1);//

