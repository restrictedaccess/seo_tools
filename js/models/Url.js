define(["require", "exports"], function (require, exports) {
    "use strict";
    var Url = (function () {
        function Url() {
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
        Url.prototype.setId = function (id) {
            this.id = id;
        };
        Url.prototype.getId = function () {
            return this.id;
        };
        Url.prototype.setStatus = function (status) {
            this.status = status;
        };
        Url.prototype.getStatus = function () {
            return this.status;
        };
        Url.prototype.setName = function (name) {
            this.name = name;
        };
        Url.prototype.getName = function () {
            return this.name;
        };
        Url.prototype.setUri = function (uri) {
            this.uri = uri;
        };
        Url.prototype.getUri = function () {
            return this.uri;
        };
        Url.prototype.setMetaDescription = function (metaDescription) {
            this.metaDescription = metaDescription;
        };
        Url.prototype.getMetaDescription = function () {
            return this.metaDescription;
        };
        Url.prototype.setTitle = function (title) {
            this.title = title;
        };
        Url.prototype.getTitle = function () {
            return this.title;
        };
        Url.prototype.setKeywords = function (keywords) {
            this.keywords = keywords;
        };
        Url.prototype.getKeywords = function () {
            return this.keywords;
        };
        Url.prototype.setPageH1 = function (page_h1) {
            this.page_h1 = page_h1;
        };
        Url.prototype.getPageH1 = function () {
            return this.page_h1;
        };
        Url.prototype.setPageH2 = function (page_h2) {
            this.page_h2 = page_h2;
        };
        Url.prototype.getPageH2 = function () {
            return this.page_h2;
        };
        Url.prototype.setPageH3 = function (page_h3) {
            this.page_h3 = page_h3;
        };
        Url.prototype.getPageH3 = function () {
            return this.page_h3;
        };
        Url.prototype.setRedictsTo = function (redirects_to) {
            this.redirects_to = redirects_to;
        };
        Url.prototype.getRedictsTo = function () {
            return this.redirects_to;
        };
        Url.prototype.setDateCreated = function (dateCreated) {
            this.dateCreated = dateCreated;
        };
        Url.prototype.getDateCreated = function () {
            return this.dateCreated;
        };
        Url.prototype.setDateUpdated = function (dateUpdated) {
            this.dateUpdated = dateUpdated;
        };
        Url.prototype.getDateUpdated = function () {
            return this.dateUpdated;
        };
        Url.prototype.setLastUpdatedByName = function (lastUpdatedByName) {
            this.lastUpdatedByName = lastUpdatedByName;
        };
        Url.prototype.getLastUpdatedByName = function () {
            return this.lastUpdatedByName;
        };
        Url.prototype.setLastUpdatedById = function (lastUpdatedById) {
            this.lastUpdatedById = lastUpdatedById;
        };
        Url.prototype.getLastUpdatedById = function () {
            return this.lastUpdatedById;
        };
        Url.prototype.setSortNumber = function (sortNumber) {
            this.sortNumber = sortNumber;
        };
        Url.prototype.getSortNumber = function () {
            return this.sortNumber;
        };
        Url.prototype.setCreatedById = function (createdById) {
            this.createdById = createdById;
        };
        Url.prototype.getCreatedById = function () {
            return this.createdById;
        };
        Url.prototype.setCreatedByName = function (createdByName) {
            this.createdByName = createdByName;
        };
        Url.prototype.getCreatedByName = function () {
            return this.createdByName;
        };
        Url.prototype.setSaveParams = function (save_params) {
            this.save_params = save_params;
        };
        Url.prototype.getSaveParams = function () {
            return this.save_params;
        };
        Url.prototype.getDisplayName = function () {
            var current_name = this.getName();
            if (current_name == null || current_name == "") {
                current_name = "New Site";
            }
            return current_name;
        };
        Url.prototype.toJSON = function () {
            var data = {
                id: this.getId(),
                link: this.getName(),
                meta_description: this.getMetaDescription(),
                title: this.getTitle(),
                meta_keywords: this.getKeywords(),
                page_h1: this.getPageH1(),
                page_h2: this.getPageH2(),
                page_h3: this.getPageH3(),
                redirects_to: this.getRedictsTo(),
                status: this.getStatus(),
                date_created: this.getDateCreated(),
                date_updated: this.getDateUpdated(),
                last_updated_by_name: this.getLastUpdatedByName(),
                last_updated_by_id: this.getLastUpdatedById(),
                sort_number: this.getSortNumber(),
                created_by_id: this.getCreatedById(),
                created_by_name: this.getCreatedByName(),
                save_params: this.getSaveParams()
            };
            return data;
        };
        return Url;
    }());
    exports.Url = Url;
});
//# sourceMappingURL=Url.js.map