define(["require", "exports"], function (require, exports) {
    "use strict";
    var CandidatesEngine = (function () {
        function CandidatesEngine() {
        }
        CandidatesEngine.prototype.setApiUrl = function (apiUrl) {
            this.api_url = apiUrl;
        };
        ;
        CandidatesEngine.prototype.getApiUrl = function () {
            return this.api_url;
        };
        ;
        CandidatesEngine.prototype.setScope = function ($scope) {
            this.$scope = $scope;
        };
        CandidatesEngine.prototype.getScope = function () {
            return this.$scope;
        };
        CandidatesEngine.prototype.setHttp = function ($http) {
            this.$http = $http;
        };
        ;
        CandidatesEngine.prototype.getHttp = function () {
            return this.$http;
        };
        ;
        CandidatesEngine.prototype.setSce = function ($sce) {
            this.$sce = $sce;
        };
        ;
        CandidatesEngine.prototype.getSce = function () {
            return this.$sce;
        };
        ;
        CandidatesEngine.prototype.setModal = function ($modal) {
            this.$modal = $modal;
        };
        ;
        CandidatesEngine.prototype.getModal = function () {
            return this.$modal;
        };
        ;
        CandidatesEngine.prototype.setController = function ($controller) {
            this.$controller = $controller;
        };
        ;
        CandidatesEngine.prototype.getController = function () {
            return this.$controller;
        };
        ;
        CandidatesEngine.prototype.setToaster = function (toaster) {
            this.toaster = toaster;
        };
        CandidatesEngine.prototype.getToaster = function () {
            return this.toaster;
        };
        return CandidatesEngine;
    }());
    exports.CandidatesEngine = CandidatesEngine;
});
//# sourceMappingURL=CandidatesEngine.js.map