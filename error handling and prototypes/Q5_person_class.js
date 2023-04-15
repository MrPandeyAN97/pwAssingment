class Person{
    constructor(name="unknown",age=0){
        this.name = name;
        this.age = age;
    }
    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

const naam = new Person("ram", 30);
console.log(naam.getDetails());
const naam1= new Person();
console.log(naam1.getDetails());