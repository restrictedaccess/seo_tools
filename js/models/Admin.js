define(["require", "exports"], function (require, exports) {
    "use strict";
    var Admin = (function () {
        function Admin() {
        }
        Admin.prototype.setId = function (id) {
            this.id = id;
        };
        Admin.prototype.getId = function () {
            return this.id;
        };
        Admin.prototype.getFirstName = function () {
            return this.first_name;
        };
        Admin.prototype.setFirstName = function (first_name) {
            this.first_name = first_name;
        };
        Admin.prototype.getLastName = function () {
            return this.last_name;
        };
        Admin.prototype.setLastName = function (last_name) {
            this.last_name = last_name;
        };
        Admin.prototype.getName = function () {
            return this.first_name + " " + this.last_name;
        };
        Admin.prototype.toJSON = function () {
            return {
                first_name: this.getFirstName(),
                last_name: this.getLastName(),
                id: this.getId()
            };
        };
        return Admin;
    }());
    exports.Admin = Admin;
});
//# sourceMappingURL=Admin.js.map