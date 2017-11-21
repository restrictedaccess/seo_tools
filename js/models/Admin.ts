import {Persistable} from "./Persistable";
interface AdminData{
    id:number;
    first_name:string;
    last_name:string;
}

class Admin implements Persistable{
    private id:number;
    private first_name:string;
    private last_name:string;


    public setId(id:number){
        this.id = id;
    }

    public getId():number{
        return this.id;
    }

    public getFirstName():string{
        return this.first_name;
    }

    public setFirstName(first_name:string){
        this.first_name = first_name;
    }

    public getLastName():string{
        return this.last_name;
    }

    public setLastName(last_name:string){
        this.last_name = last_name;
    }

    public getName():string{
        return this.first_name + " " + this.last_name;
    }

    public toJSON():AdminData{
        return {
            first_name:this.getFirstName(),
            last_name:this.getLastName(),
            id:this.getId()
        }
    }
}

export {Admin, AdminData};