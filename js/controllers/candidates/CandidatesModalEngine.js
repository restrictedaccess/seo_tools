define(["require", "exports"], function (require, exports) {
    "use strict";
    var CandidatesModalEngine = (function () {
        function CandidatesModalEngine() {
        }
        CandidatesModalEngine.prototype.setApiUrl = function (apiUrl) {
            this.api_url = apiUrl;
        };
        ;
        CandidatesModalEngine.prototype.getApiUrl = function () {
            return this.api_url;
        };
        ;
        CandidatesModalEngine.prototype.setScope = function ($scope) {
            this.$scope = $scope;
        };
        CandidatesModalEngine.prototype.getScope = function () {
            return this.$scope;
        };
        CandidatesModalEngine.prototype.setHttp = function ($http) {
            this.$http = $http;
        };
        ;
        CandidatesModalEngine.prototype.getHttp = function () {
            return this.$http;
        };
        ;
        CandidatesModalEngine.prototype.setSce = function ($sce) {
            this.$sce = $sce;
        };
        ;
        CandidatesModalEngine.prototype.getSce = function () {
            return this.$sce;
        };
        ;
        CandidatesModalEngine.prototype.setModal = function ($modal) {
            this.$modal = $modal;
        };
        ;
        CandidatesModalEngine.prototype.getModal = function () {
            return this.$modal;
        };
        ;
        CandidatesModalEngine.prototype.setController = function ($controller) {
            this.$controller = $controller;
        };
        ;
        CandidatesModalEngine.prototype.getController = function () {
            return this.$controller;
        };
        ;
        CandidatesModalEngine.prototype.setToaster = function (toaster) {
            this.toaster = toaster;
        };
        CandidatesModalEngine.prototype.getToaster = function () {
            return this.toaster;
        };
        CandidatesModalEngine.prototype.setInvoker = function ($invoker) {
            this.$invoker = $invoker;
        };
        CandidatesModalEngine.prototype.getInvoker = function () {
            return this.$invoker;
        };
        return CandidatesModalEngine;
    }());
    exports.CandidatesModalEngine = CandidatesModalEngine;
});
//# sourceMappingURL=CandidatesModalEngine.js.map