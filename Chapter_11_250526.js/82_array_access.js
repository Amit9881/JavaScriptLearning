let name = ["amit", "surya", "medical"];
console.log(name[0]);//amit
console.log(name[1]);//surya
console.log(name[4]);//undefined

console.log(name.at(-1));//medical
console.log(name.at[-2]);//undefined
console.log(name.at(-3));//amit
console.log(name.at(-4));//undefined

name[1] = "sone";
console.log(name);//[ 'amit', 'sone', 'medical' ]