

import {Persistable} from "./Persistable";
interface UrlData{
    id: string,
    link:string,
    meta_description:string,
    title:string,
    meta_keywords:string,
    page_h1:string,
    page_h2:string,
    page_h3:string,
    redirects_to:string,
    status:string,
    date_created:string,
    date_updated:string,
    last_updated_by_name:string,
    last_updated_by_id:number,
    sort_number:number,
    created_by_id:number,
    created_by_name:string,
    save_params:string

}


class Url implements Persistable{
    private id:string;
    private name:string;
    private uri:string;
    private metaDescription:string;
    private title:string;
    private keywords:string;
    private page_h1:string;
    private page_h2:string;
    private page_h3:string;
    private redirects_to:string;
    private status:string;
    private dateCreated:string;
    private dateUpdated:string;
    private lastUpdatedByName:string;
    private lastUpdatedById:number;
    private sortNumber:number;
    private createdById:number;
    private createdByName:string;
    private save_params:string;


    constructor(){
        this.id = null;
        this.name = null;
        this.uri = "";
        this.metaDescription = "";
        this.title = "";
        this.keywords = "";
        this.page_h1 = "";
        this.page_h2 = "";
        this.page_h3 = "";
        this.redirects_to = "";
        this.status = "";

        this.dateCreated = "";
        this.dateUpdated = "";
        this.lastUpdatedByName = "";
        this.lastUpdatedById = null;
        this.sortNumber = null;
        this.createdById = null;
        this.createdByName = "";
        this.save_params = "no";

    }


    public setId(id:string){
        this.id = id;
    }
    public getId():string{
        return this.id;
    }


    public setStatus(status:string){
        this.status = status;
    }
    public getStatus():string{
        return this.status;
    }



    public setName(name:string){
        this.name = name;
    }
    public getName():string{
        return this.name;
    }



    public setUri(uri:string){
        this.uri = uri;
    }
    public getUri():string{
        return this.uri;
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



    public setKeywords(keywords:string){
        this.keywords = keywords;
    }
    public getKeywords():string{
        return this.keywords;
    }



    public setPageH1(page_h1:string){
        this.page_h1 = page_h1;
    }
    public getPageH1():string{
        return this.page_h1;
    }


    public setPageH2(page_h2:string){
        this.page_h2 = page_h2;
    }
    public getPageH2():string{
        return this.page_h2;
    }



    public setPageH3(page_h3:string){
        this.page_h3 = page_h3;
    }
    public getPageH3():string{
        return this.page_h3;
    }



    public setRedictsTo(redirects_to:string){
        this.redirects_to = redirects_to;
    }
    public getRedictsTo():string{
        return this.redirects_to;
    }




    public setDateCreated(dateCreated:string){
        this.dateCreated = dateCreated;
    }
    public getDateCreated():string{
        return this.dateCreated;
    }


    public setDateUpdated(dateUpdated:string){
        this.dateUpdated = dateUpdated;
    }
    public getDateUpdated():string{
        return this.dateUpdated;
    }

    public setLastUpdatedByName(lastUpdatedByName:string){
        this.lastUpdatedByName = lastUpdatedByName;
    }
    public getLastUpdatedByName():string{
        return this.lastUpdatedByName;
    }

    public setLastUpdatedById(lastUpdatedById:number){
        this.lastUpdatedById = lastUpdatedById;
    }
    public getLastUpdatedById():number{
        return this.lastUpdatedById;
    }

    public setSortNumber(sortNumber:number){
        this.sortNumber = sortNumber;
    }
    public getSortNumber():number{
        return this.sortNumber;
    }


    public setCreatedById(createdById:number){
        this.createdById = createdById;
    }
    public getCreatedById():number{
        return this.createdById;
    }

    public setCreatedByName(createdByName:string){
        this.createdByName = createdByName;
    }
    public getCreatedByName():string{
        return this.createdByName;
    }

    public setSaveParams(save_params:string){
        this.save_params = save_params;
    }
    public getSaveParams():string{
        return this.save_params;
    }


    public getDisplayName():string{
        let current_name = this.getName();

        if(current_name == null || current_name == ""){
            current_name = "New Site"
        }

        return current_name;
    }


    public toJSON():UrlData{
        let data:UrlData = {
            id: this.getId(),
            link:this.getName(),
            meta_description:this.getMetaDescription(),
            title:this.getTitle(),
            meta_keywords:this.getKeywords(),
            page_h1:this.getPageH1(),
            page_h2:this.getPageH2(),
            page_h3:this.getPageH3(),
            redirects_to:this.getRedictsTo(),
            status:this.getStatus(),
            date_created:this.getDateCreated(),
            date_updated:this.getDateUpdated(),
            last_updated_by_name:this.getLastUpdatedByName(),
            last_updated_by_id:this.getLastUpdatedById(),
            sort_number:this.getSortNumber(),
            created_by_id:this.getCreatedById(),
            created_by_name:this.getCreatedByName(),
            save_params: this.getSaveParams()

        };

        return data;
    }


}

export {Url, UrlData}