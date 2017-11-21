import {Category, CategoryData} from "./Category";
import {Persistable} from "./Persistable";

interface SubCategoryData{
    sub_category_id: number,
    sub_category_name:string,
    singular_name:string,
    url:string,
    description:string,
    title:string,
    keywords:string,
    meta_description:string,
    page_header:string,
    page_description:string,
    status:string,
    asl_h1:string,
    asl_h2:string,
    category?:CategoryData
}

class SubCategory implements Persistable{
    private id: number;
    private name:string;
    private singularName:string;
    private url:string;
    private pageHeader:string;
    private status:string;
    private title:string;
    private pageDescription:string;
    private description:string;
    private metaDescription:string;
    private keywords:string;
    private asl_h1:string;
    private asl_h2:string;
    private category:Category;
    private previous_category:Category;

    constructor(){
        this.id = null;
        this.name = "";
        this.singularName = "";
        this.url = "";
        this.pageHeader = "";
        this.status = "";
        this.title = "";
        this.pageDescription = "";
        this.metaDescription = "";
        this.keywords = "";
        this.asl_h1 = "";
        this.asl_h2 = "";
        this.category = null;
        this.previous_category;
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


    public setCategory(category:Category){
        this.category = category;
    }
    public getCategory():Category{
        return this.category;
    }


    public setPreviousCategory(previous_category:Category){
        this.previous_category = previous_category;
    }
    public getPreviousCategory():Category{
        return this.previous_category;
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


    public setStatus(status:string){
        this.status = status;
    }
    public getStatus():string{
        return this.status;
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


    public setTitle(title:string){
        this.title = title;
    }
    public getTitle():string{
        return this.title;
    }


    public getDisplayName():string{
        if(typeof this.name !== "undefined" && this.name != ""){
            return this.name;
        }

        return "New Sub Category";
    }


    /**
     * @returns {{id: number, name: string}}
     */
    public toJSON():SubCategoryData{
        let me = this;

        let data:SubCategoryData = {
            sub_category_id: me.getId(),
            sub_category_name:me.getName(),
            singular_name:me.getSingularName(),
            url:me.getUrl(),
            description:me.getDescription(),
            title:me.getTitle(),
            keywords:me.getKeywords(),
            meta_description:me.getMetaDescription(),
            page_header:me.getPageHeader(),
            page_description:me.getPageDescription(),
            status:me.getStatus(),
            asl_h1:me.getAslH1(),
            asl_h2:me.getAslH2()
        };

        if(this.getCategory() !== null){
            data.category = this.getCategory().toJSON()
        }

        return data;
    }


}
export {SubCategory, SubCategoryData}