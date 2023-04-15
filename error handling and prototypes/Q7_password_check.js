class User{
    constructor(username,password){
        this.username = username;
        this._password = password;
    }
    get password(){
        return this._password.replace(/./g,"*");
    }
    set password(newPassword){
        if(newPassword.length<8||!/[0-9]/.test(newPassword)|| !/[A-Z]/.test(newPassword)){
            console.log("Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter.");
        }else{
            this._password = newPassword;
        }
    }
}

const user = new User("johndoe", "Password123");
console.log(user.password);

user.password = "short";
user.password = "notsecure";

user.password = "SecurePassword123";
console.log(user.password); 


