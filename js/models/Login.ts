
import {Persistable} from "./Persistable";

interface LoginData{
    email:string;
    password:string;
}

class Login implements Persistable{

    private email:string;
    private password:string;

    private errors:Array<string>;

    constructor(){
        this.errors = new Array<string>();
    }


    public setEmail(email:string){
        this.email = email;
    }
    public getEmail():string{
        return this.email;
    }


    public setPassword(password:string){
        this.password = password;
    }
    public getPassword():string{
        return this.password;
    }




    public setErrors(errors:Array<string>){
        this.errors = errors;
    }
    public getErrors():Array<string>{
        return this.errors;
    }
    public hasErrors():boolean{
        return (this.errors.length > 0);
    }





    public toJSON():LoginData{

        let data:LoginData = {
            email: this.email,
            password: this.password
        };
        return data;
    }
}

export {Login, LoginData}