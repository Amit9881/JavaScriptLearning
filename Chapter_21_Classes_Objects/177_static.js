class student {
    static name = "playwright"
    static tutor = "pramod";

    constructor(names, age) {
        this.names = names;
        this.age = age;
    }


}

const s1 = new student("amit", 31);
const s2 = new student("sury", 30);

console.log(s1.names);
console.log(s1.name);//undefined

console.log(student.name)//playwright