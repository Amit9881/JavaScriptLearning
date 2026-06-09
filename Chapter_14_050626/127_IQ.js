const user = {
    name: "Amit",
    age: 30,
    home: "karad"
};

console.log(user);//{ name: 'Amit', age: 30, home: 'karad' }
console.log(user.name);//Amit
console.log(user["home"]);//karad

// Dynamic property access
const key = "age";
console.log(user[key]); //30

// Adding/modifying properties
user.home = "satara";
user.age = 29;

console.log(user);//{ name: 'Amit', age: 29, home: 'satara' }

let obj = { name: "SURYA" };
console.log(Object.getOwnPropertyDescriptor(obj, "name"));
/*
{
  value: 'SURYA',
  writable: true,
  enumerable: true,
  configurable: true
}
  */