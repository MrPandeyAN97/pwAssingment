function convNumber(str){
    try{
        let num=Number(str);
        if(isNaN(num))throw new Error("Invalid number");
        return num;
    }catch(e){
        return e.message;
    }
}

console.log(convNumber("123"));
console.log(convNumber("abc"));
console.log(convNumber(""));