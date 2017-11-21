define(["require", "exports", "../models/Login"], function (require, exports, Login_1) {
    "use strict";
    function LoginPageController($scope, $sce, $state, $location, $http, $timeout, $modal, toaster) {
        var API_URL = jQuery("#BASE_API_URL").val();
        var BASE_SLIM_URL = jQuery("#BASE_SLIM_URL").val();
        $scope.login = new Login_1.Login();
        $scope.isLoggedIn = true;
        $scope.check_email_validity = function (success_function, data_to_use) {
            $http({
                method: 'POST',
                url: BASE_SLIM_URL + "/login/check-admin-email-validity",
                data: data_to_use
            }).success(function (response) {
                success_function(response);
            }).error(function (response, status) {
            });
        };
        $http({
            method: 'POST',
            url: "/portal/seo_v2/check_session.php",
            params: {}
        }).success(function (response) {
            if (response.success) {
                $state.go('seo.dashboard', {});
            }
            else {
                $scope.isLoggedIn = false;
            }
        }).error(function (response, status) {
        });
        $scope.submitLoginForm = function () {
            $scope.login.setErrors(new Array());
            $scope.check_email_validity(function (response) {
                if (response.success) {
                    $http({
                        method: 'POST',
                        url: BASE_SLIM_URL + "/login/attempt",
                        data: {
                            credentials: $scope.login.toJSON()
                        }
                    }).success(function (response) {
                        if (response.success) {
                            $http({
                                method: 'POST',
                                url: "/portal/seo_v2/set_session.php",
                                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                                transformRequest: function (obj) {
                                    var str = [];
                                    for (var p in obj)
                                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                                    return str.join("&");
                                },
                                data: {
                                    admin_id: response.details.admin_id,
                                    status: response.details.status,
                                    email: $scope.login.getEmail()
                                }
                            }).success(function (response) {
                                window.sessionStorage.setItem("current_session", JSON.stringify(response.admin_details));
                                $state.go('seo.dashboard', {});
                            });
                            var data = {
                                email: $scope.login.getEmail(),
                                login_type: "admin",
                                password: $scope.login.getPassword(),
                            };
                            if (response.details.status == "HR") {
                                data.recruiter = true;
                            }
                            $http({
                                method: 'POST',
                                url: "/portal/index.php",
                                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                                transformRequest: function (obj) {
                                    var str = [];
                                    for (var p in obj)
                                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                                    return str.join("&");
                                },
                                data: data
                            }).success(function (response) {
                            }).error(function (response, status) {
                            });
                        }
                        else {
                            $scope.login.setPassword("");
                            response.errors.forEach(function (value) {
                                var found_error_duplicates = $scope.login.getErrors().filter(function (el) {
                                    return el == value;
                                });
                                if (found_error_duplicates.length <= 0) {
                                    $scope.login.getErrors().push(value);
                                }
                            });
                        }
                    }).error(function (response, status) {
                    });
                }
                else {
                    $scope.login.setPassword("");
                    response.errors.forEach(function (value) {
                        var found_error_duplicates = $scope.login.getErrors().filter(function (el) {
                            return el == value;
                        });
                        if (found_error_duplicates.length <= 0) {
                            $scope.login.getErrors().push(value);
                        }
                    });
                }
            }, {
                credentials: $scope.login.toJSON()
            });
        };
        function ForgotPasswordSuccessModalController($scope, $modalInstance, $http, $invoker, toaster) {
            $invoker.close_modal();
            $scope.close_modal = function () {
                $modalInstance.dismiss('modal');
            };
            $scope.forgotPassword = $invoker.forgotPassword;
        }
        function ForgotPasswordModalController($scope, $modalInstance, $http, $invoker, toaster) {
            $scope.close_modal = function () {
                $modalInstance.dismiss('modal');
            };
            $invoker.check_email_validity;
            $scope.forgotPassword = new Login_1.Login();
            $scope.forgotPasswordFormSubmit = function () {
                $scope.forgotPassword.setErrors(new Array());
                $invoker.check_email_validity(function (response) {
                    if (response.success) {
                        $http({
                            method: 'POST',
                            url: "/portal/forgotpass.php",
                            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                            transformRequest: function (obj) {
                                var str = [];
                                for (var p in obj)
                                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                                return str.join("&");
                            },
                            data: {
                                email: $scope.forgotPassword.getEmail(),
                                user: "admin",
                                task: "send_email"
                            }
                        }).success(function (response) {
                        }).error(function (response, status) {
                        });
                        var modalInstance = $modal.open({
                            templateUrl: 'views/seo/modals/forgotpass-success-modal.html',
                            controller: ForgotPasswordSuccessModalController,
                            windowClass: "animated fadeIn",
                            size: "md",
                            resolve: {
                                $invoker: function () {
                                    return $scope;
                                }
                            }
                        });
                    }
                    else {
                        response.errors.forEach(function (value) {
                            var found_error_duplicates = $scope.forgotPassword.getErrors().filter(function (el) {
                                return el == value;
                            });
                            if (found_error_duplicates.length <= 0) {
                                $scope.forgotPassword.getErrors().push(value);
                            }
                        });
                    }
                }, {
                    credentials: $scope.forgotPassword.toJSON()
                });
            };
        }
        $scope.forgotPassword = function () {
            $scope.login.setPassword("");
            var modalInstance = $modal.open({
                templateUrl: 'views/seo/modals/forgotpass-modal.html',
                controller: ForgotPasswordModalController,
                windowClass: "animated fadeIn",
                size: "md",
                resolve: {
                    $invoker: function () {
                        return $scope;
                    }
                }
            });
        };
        rs_module.controller('ForgotPasswordSuccessModalController', ["$scope", "$modalInstance", "$http", "$invoker", ForgotPasswordSuccessModalController,]);
        rs_module.controller('ForgotPasswordModalController', ["$scope", "$modalInstance", "$http", "$invoker", ForgotPasswordModalController,]);
    }
    rs_module.controller('LoginController', ["$scope", "$sce", "$state", "$location", "$http", "$timeout", "$modal", "toaster", LoginPageController]);
});
//# sourceMappingURL=login.js.map