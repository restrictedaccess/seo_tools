import {Persistable} from "./Persistable";

interface SkillsData {
    skillName:string;
    metaDescription:string;
    metaTitle:string;
    metaKeywords:string;
    url:string;
    id:number;
    key:number
}

class Skills implements Persistable {

    private skillName:string;
    private metaDescription:string;
    private metaTitle:string;
    private metaKeywords:string;
    private url:string;
    private id:number;
    private key:number;

    public init(data:any){
        if(typeof data !== "undefined"){
            this.id = data.id;
            this.key = data.key;
            this.skillName = data.skillName;
            this.metaDescription = data.metaDescription;
            this.metaTitle = data.metaTitle;
            this.metaKeywords = data.metaKeywords;
            this.url = data.url;
        }
    }

    public setSkillName(skillName:string){
        this.skillName = skillName;
    }

    public getSkillName():string{
        return this.skillName;
    }

    public setMetaDescription(metaDescription:string){
        this.metaDescription = metaDescription;
    }

    public getMetaDescription():string{
        return this.metaDescription;
    }

    public setMetaTitle(metaTitle:string){
        this.metaTitle = metaTitle;
    }

    public getMetaTitle():string{
        return this.metaTitle;
    }

    public setMetaKeywords(metaKeywords:string){
        this.metaKeywords = metaKeywords;
    }

    public getMetaKeywords():string{
        return this.metaKeywords;
    }

    public setUrl(url:string){
        this.url = url;
    }

    public getUrl():string{
        return this.url;
    }

    public setId(id:number){
        this.id = id;
    }

    public getId():number{
        return this.id;
    }

    public setKey(key:number){
        this.key = key;
    }

    public getKey():number{
        return this.key;
    }

    public toJSON():SkillsData{

        let data:SkillsData = <SkillsData>{
            skillName: this.skillName,
            metaDescription: this.metaDescription,
            metaTitle: this.metaTitle,
            metaKeywords:this.metaKeywords,
            url: this.url,
            id: this.id,
            key: this.key
        };
        return data;
    }
}

export {Skills, SkillsData}