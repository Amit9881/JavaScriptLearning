const obj1 = { name: "amit", age: 29, city: "Karad" };

//object destructuring

const { name, age } = obj1;
console.log(name);//amit
console.log(age);//29

//Rename variable
const { name: userName, age: userAge } = obj1;
console.log(userName);//amit
console.log(userAge);//29

const { city = "satara" } = obj1;
console.log(city);//karad
console.log(obj1);//{ name: 'amit', age: 29, city: 'Karad' }

const data = {

    user: {
        name: "Amit",
        address: {
            city: "karad"
        }
    }
};
console.log(data);//{ user: { name: 'Amit', address: { city: 'karad' } } }
//const { user: { address: { city } } } = data;
//console.log(data.user.address.city);
const { user: { address: { city } } } = data;
console.log(data.user.address.city);
//SyntaxError: Identifier 'city' has already been declared


