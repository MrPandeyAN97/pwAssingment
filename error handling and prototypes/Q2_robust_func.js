function getPerson(person){
    try{
        if(typeof person !=="object" ||!person.name || !person.age){
            throw new Error("Invalid parameter type");
        }
        return `Name: ${person.name}, age: ${ person.age}`;
    }catch(e){
        return e.message;
    }
}

const person = { name: "Mithun", age: 20 };
console.log(getPerson(person));

const person3 = { age: 25 };
console.log(getPerson(person3));