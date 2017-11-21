define(["require", "exports"], function (require, exports) {
    "use strict";
    var Category = (function () {
        function Category() {
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
            this.subCategories = new Array();
        }
        Category.prototype.setSubCategories = function (subCategories) {
            this.subCategories = subCategories;
        };
        Category.prototype.getSubCategories = function () {
            return this.subCategories;
        };
        Category.prototype.setId = function (id) {
            this.id = id;
        };
        Category.prototype.getId = function () {
            return this.id;
        };
        Category.prototype.setName = function (name) {
            this.name = name;
        };
        Category.prototype.getName = function () {
            return this.name;
        };
        Category.prototype.setSingularName = function (singularName) {
            this.singularName = singularName;
        };
        Category.prototype.getSingularName = function () {
            return this.singularName;
        };
        Category.prototype.setUrl = function (url) {
            this.url = url;
        };
        Category.prototype.getUrl = function () {
            return this.url;
        };
        Category.prototype.setPageHeader = function (pageHeader) {
            this.pageHeader = pageHeader;
        };
        Category.prototype.getPageHeader = function () {
            return this.pageHeader;
        };
        Category.prototype.setPageDescription = function (pageDescription) {
            this.pageDescription = pageDescription;
        };
        Category.prototype.getPageDescription = function () {
            return this.pageDescription;
        };
        Category.prototype.setDescription = function (description) {
            this.description = description;
        };
        Category.prototype.getDescription = function () {
            return this.description;
        };
        Category.prototype.setMetaDescription = function (metaDescription) {
            this.metaDescription = metaDescription;
        };
        Category.prototype.getMetaDescription = function () {
            return this.metaDescription;
        };
        Category.prototype.setTitle = function (title) {
            this.title = title;
        };
        Category.prototype.getTitle = function () {
            return this.title;
        };
        Category.prototype.setStatus = function (status) {
            this.status = status;
        };
        Category.prototype.getStatus = function () {
            return this.status;
        };
        Category.prototype.setKeywords = function (keywords) {
            this.keywords = keywords;
        };
        Category.prototype.getKeywords = function () {
            return this.keywords;
        };
        Category.prototype.setAslH1 = function (asl_h1) {
            this.asl_h1 = asl_h1;
        };
        Category.prototype.getAslH1 = function () {
            return this.asl_h1;
        };
        Category.prototype.setAslH2 = function (asl_h2) {
            this.asl_h2 = asl_h2;
        };
        Category.prototype.getAslH2 = function () {
            return this.asl_h2;
        };
        Category.prototype.getDisplayName = function () {
            if (typeof this.name !== "undefined" && this.name != "") {
                return this.name;
            }
            return "New Category";
        };
        Category.prototype.toJSON = function () {
            var me = this;
            return {
                category_id: me.getId(),
                status: me.getStatus(),
                category_name: me.getName(),
                singular_name: me.getSingularName(),
                url: me.getUrl(),
                description: me.getDescription(),
                title: me.getTitle(),
                v: me.getMetaDescription(),
                keywords: me.getKeywords(),
                page_header: me.getPageHeader(),
                page_description: me.getPageDescription(),
                asl_h1: me.getAslH1(),
                asl_h2: me.getAslH2(),
                meta_description: me.getMetaDescription()
            };
        };
        return Category;
    }());
    exports.Category = Category;
});
//# sourceMappingURL=Category.js.map