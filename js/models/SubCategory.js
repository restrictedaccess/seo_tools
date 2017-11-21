define(["require", "exports"], function (require, exports) {
    "use strict";
    var SubCategory = (function () {
        function SubCategory() {
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
        SubCategory.prototype.setId = function (id) {
            this.id = id;
        };
        SubCategory.prototype.getId = function () {
            return this.id;
        };
        SubCategory.prototype.setName = function (name) {
            this.name = name;
        };
        SubCategory.prototype.getName = function () {
            return this.name;
        };
        SubCategory.prototype.setCategory = function (category) {
            this.category = category;
        };
        SubCategory.prototype.getCategory = function () {
            return this.category;
        };
        SubCategory.prototype.setPreviousCategory = function (previous_category) {
            this.previous_category = previous_category;
        };
        SubCategory.prototype.getPreviousCategory = function () {
            return this.previous_category;
        };
        SubCategory.prototype.setSingularName = function (singularName) {
            this.singularName = singularName;
        };
        SubCategory.prototype.getSingularName = function () {
            return this.singularName;
        };
        SubCategory.prototype.setUrl = function (url) {
            this.url = url;
        };
        SubCategory.prototype.getUrl = function () {
            return this.url;
        };
        SubCategory.prototype.setPageHeader = function (pageHeader) {
            this.pageHeader = pageHeader;
        };
        SubCategory.prototype.getPageHeader = function () {
            return this.pageHeader;
        };
        SubCategory.prototype.setStatus = function (status) {
            this.status = status;
        };
        SubCategory.prototype.getStatus = function () {
            return this.status;
        };
        SubCategory.prototype.setPageDescription = function (pageDescription) {
            this.pageDescription = pageDescription;
        };
        SubCategory.prototype.getPageDescription = function () {
            return this.pageDescription;
        };
        SubCategory.prototype.setDescription = function (description) {
            this.description = description;
        };
        SubCategory.prototype.getDescription = function () {
            return this.description;
        };
        SubCategory.prototype.setMetaDescription = function (metaDescription) {
            this.metaDescription = metaDescription;
        };
        SubCategory.prototype.getMetaDescription = function () {
            return this.metaDescription;
        };
        SubCategory.prototype.setKeywords = function (keywords) {
            this.keywords = keywords;
        };
        SubCategory.prototype.getKeywords = function () {
            return this.keywords;
        };
        SubCategory.prototype.setAslH1 = function (asl_h1) {
            this.asl_h1 = asl_h1;
        };
        SubCategory.prototype.getAslH1 = function () {
            return this.asl_h1;
        };
        SubCategory.prototype.setAslH2 = function (asl_h2) {
            this.asl_h2 = asl_h2;
        };
        SubCategory.prototype.getAslH2 = function () {
            return this.asl_h2;
        };
        SubCategory.prototype.setTitle = function (title) {
            this.title = title;
        };
        SubCategory.prototype.getTitle = function () {
            return this.title;
        };
        SubCategory.prototype.getDisplayName = function () {
            if (typeof this.name !== "undefined" && this.name != "") {
                return this.name;
            }
            return "New Sub Category";
        };
        SubCategory.prototype.toJSON = function () {
            var me = this;
            var data = {
                sub_category_id: me.getId(),
                sub_category_name: me.getName(),
                singular_name: me.getSingularName(),
                url: me.getUrl(),
                description: me.getDescription(),
                title: me.getTitle(),
                keywords: me.getKeywords(),
                meta_description: me.getMetaDescription(),
                page_header: me.getPageHeader(),
                page_description: me.getPageDescription(),
                status: me.getStatus(),
                asl_h1: me.getAslH1(),
                asl_h2: me.getAslH2()
            };
            if (this.getCategory() !== null) {
                data.category = this.getCategory().toJSON();
            }
            return data;
        };
        return SubCategory;
    }());
    exports.SubCategory = SubCategory;
});
//# sourceMappingURL=SubCategory.js.map