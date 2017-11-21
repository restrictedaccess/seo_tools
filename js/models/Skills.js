define(["require", "exports"], function (require, exports) {
    "use strict";
    var Skills = (function () {
        function Skills() {
        }
        Skills.prototype.init = function (data) {
            if (typeof data !== "undefined") {
                this.id = data.id;
                this.key = data.key;
                this.skillName = data.skillName;
                this.metaDescription = data.metaDescription;
                this.metaTitle = data.metaTitle;
                this.metaKeywords = data.metaKeywords;
                this.url = data.url;
            }
        };
        Skills.prototype.setSkillName = function (skillName) {
            this.skillName = skillName;
        };
        Skills.prototype.getSkillName = function () {
            return this.skillName;
        };
        Skills.prototype.setMetaDescription = function (metaDescription) {
            this.metaDescription = metaDescription;
        };
        Skills.prototype.getMetaDescription = function () {
            return this.metaDescription;
        };
        Skills.prototype.setMetaTitle = function (metaTitle) {
            this.metaTitle = metaTitle;
        };
        Skills.prototype.getMetaTitle = function () {
            return this.metaTitle;
        };
        Skills.prototype.setMetaKeywords = function (metaKeywords) {
            this.metaKeywords = metaKeywords;
        };
        Skills.prototype.getMetaKeywords = function () {
            return this.metaKeywords;
        };
        Skills.prototype.setUrl = function (url) {
            this.url = url;
        };
        Skills.prototype.getUrl = function () {
            return this.url;
        };
        Skills.prototype.setId = function (id) {
            this.id = id;
        };
        Skills.prototype.getId = function () {
            return this.id;
        };
        Skills.prototype.setKey = function (key) {
            this.key = key;
        };
        Skills.prototype.getKey = function () {
            return this.key;
        };
        Skills.prototype.toJSON = function () {
            var data = {
                skillName: this.skillName,
                metaDescription: this.metaDescription,
                metaTitle: this.metaTitle,
                metaKeywords: this.metaKeywords,
                url: this.url,
                id: this.id,
                key: this.key
            };
            return data;
        };
        return Skills;
    }());
    exports.Skills = Skills;
});
//# sourceMappingURL=Skills.js.map