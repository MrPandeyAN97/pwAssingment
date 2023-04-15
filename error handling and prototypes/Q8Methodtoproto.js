function Student(name) {
    this.name=name;
}

Student.prototype.printdetails = function(){
    console.log(`Hello, the student is ${this.name}`);
}
const mithun=new Student("Mithun");

mithun.printdetails();