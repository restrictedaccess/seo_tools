

import {BaseModalEngine} from "./BaseModalEngine";
import {BaseEngine} from "./BaseEngine";
abstract class CandidatesModalEngine implements BaseModalEngine, BaseEngine{


    /**
     * VARIABLES
     */
    private $scope:any;

    private $http:any;

    private $sce:any;

    private $modal:any;

    private api_url:string;

    private $controller:any;

    private toaster:any;

    private $invoker:any;

    /**
     * Abstract functions
     */
    abstract process():any;

    /**
     * Function Definitions
     */
    public setApiUrl(apiUrl:string):void{
        this.api_url = apiUrl;
    };

    public getApiUrl():string{
        return this.api_url;
    };

    public setScope($scope:any):void{
        this.$scope = $scope;
    }

    public getScope():any{
        return this.$scope;
    }

    public setHttp($http:any):void{
        this.$http = $http;
    };

    public getHttp():any{
        return this.$http;
    };

    public setSce($sce:any):void{
        this.$sce = $sce;
    };

    public getSce():any{
        return this.$sce;
    };


    public setModal($modal:any):void{
        this.$modal = $modal;
    };

    public getModal():any{
        return this.$modal;
    };

    public setController($controller:any):void{
        this.$controller = $controller;
    };

    public getController():any{
        return this.$controller;
    };

    public setToaster(toaster:any){
        this.toaster = toaster;
    }

    public getToaster():any{
        return this.toaster;
    }

    public setInvoker($invoker:any):void{
        this.$invoker = $invoker;
    }

    public getInvoker():any{
        return this.$invoker;
    }
}

export {CandidatesModalEngine}