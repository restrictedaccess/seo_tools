define(["require", "exports"], function (require, exports) {
    "use strict";
    var Login = (function () {
        function Login() {
            this.errors = new Array();
        }
        Login.prototype.setEmail = function (email) {
            this.email = email;
        };
        Login.prototype.getEmail = function () {
            return this.email;
        };
        Login.prototype.setPassword = function (password) {
            this.password = password;
        };
        Login.prototype.getPassword = function () {
            return this.password;
        };
        Login.prototype.setErrors = function (errors) {
            this.errors = errors;
        };
        Login.prototype.getErrors = function () {
            return this.errors;
        };
        Login.prototype.hasErrors = function () {
            return (this.errors.length > 0);
        };
        Login.prototype.toJSON = function () {
            var data = {
                email: this.email,
                password: this.password
            };
            return data;
        };
        return Login;
    }());
    exports.Login = Login;
});
//# sourceMappingURL=Login.js.map