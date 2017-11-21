import {SubCategory} from "./SubCategory";
import {Persistable} from "./Persistable";

interface CategoryData{

    category_id: number,
    status:string,
    category_name:string,
    singular_name:string,
    url:string,
    description:string,
    meta_description:string,
    title:string,
    v:string,
    keywords:string,
    page_header:string,
    page_description:string,
    asl_h1:string,
    asl_h2:string
}

class Category implements Persistable{
    private id: number;
    private name:string;
    private singularName:string;
    private url:string;
    private pageHeader:string;
    private description:string;
    private pageDescription:string;
    private metaDescription:string;
    private title:string;
    private status:string;
    private keywords:string;
    private asl_h1:string;
    private asl_h2:string;
    private subCategories:Array<SubCategory>;

    constructor(){
        this.id = null;
        this.name = "";
        this.singularName = "";
        this.url = "";
        this.pageHeader = "";
        this.description = "";
        this.pageDescription = "";
        this.metaDescription = "";
        this.title = "";
        this.status = "";
        this.keywords = "";
        this.asl_h1 = "";
        this.asl_h2 = "";
        this.subCategories = new Array<SubCategory>();
    }

    public setSubCategories(subCategories:Array<SubCategory>){
        this.subCategories = subCategories;
    }

    public getSubCategories():Array<SubCategory>{
        return this.subCategories;
    }

    public setId(id: number) {
        this.id = id;
    }
    public getId(): number {
        return this.id;
    }


    public setName(name:string){
        this.name = name;
    }
    public getName():string{
        return this.name;
    }


    public setSingularName(singularName:string){
        this.singularName = singularName;
    }
    public getSingularName():string{
        return this.singularName;
    }



    public setUrl(url:string){
        this.url = url;
    }
    public getUrl():string{
        return this.url;
    }


    public setPageHeader(pageHeader:string){
        this.pageHeader = pageHeader;
    }
    public getPageHeader():string{
        return this.pageHeader;
    }



    public setPageDescription(pageDescription:string){
        this.pageDescription = pageDescription;
    }
    public getPageDescription():string{
        return this.pageDescription;
    }



    public setDescription(description:string){
        this.description = description;
    }
    public getDescription():string{
        return this.description;
    }




    public setMetaDescription(metaDescription:string){
        this.metaDescription = metaDescription;
    }
    public getMetaDescription():string{
        return this.metaDescription;
    }


    public setTitle(title:string){
        this.title = title;
    }
    public getTitle():string{
        return this.title;
    }


    public setStatus(status:string){
        this.status = status;
    }
    public getStatus():string{
        return this.status;
    }


    public setKeywords(keywords:string){
        this.keywords = keywords;
    }
    public getKeywords():string{
        return this.keywords;
    }


    public setAslH1(asl_h1:string){
        this.asl_h1 = asl_h1;
    }
    public getAslH1():string{
        return this.asl_h1;
    }


    public setAslH2(asl_h2:string){
        this.asl_h2 = asl_h2;
    }
    public getAslH2():string{
        return this.asl_h2;
    }


    public getDisplayName():string{
        if(typeof this.name !== "undefined" && this.name != ""){
            return this.name;
        }

        return "New Category";
    }

    /**
     *
     * @returns {{category_id: number, status: string, category_name: string, singular_name: string, url: string, description: string, title: string, v: string, keywords: string, page_header: string, page_description: string, asl_h1: string, asl_h2: string}}
     */
    public toJSON():CategoryData{
        let me = this;
        return {
            category_id: me.getId(),
            status:me.getStatus(),
            category_name:me.getName(),
            singular_name:me.getSingularName(),
            url:me.getUrl(),
            description:me.getDescription(),
            title:me.getTitle(),
            v:me.getMetaDescription(),
            keywords:me.getKeywords(),
            page_header:me.getPageHeader(),
            page_description:me.getPageDescription(),
            asl_h1:me.getAslH1(),
            asl_h2:me.getAslH2(),
            meta_description:me.getMetaDescription()
        }
    }
}
export {Category, CategoryData}