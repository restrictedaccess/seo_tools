import {Login} from "../models/Login";
declare let rs_module:any;
declare let jQuery:any;
declare let window:any;

function LoginPageController($scope:any, $sce:any, $state:any, $location:any, $http:any, $timeout:any, $modal:any, toaster:any) {





    /**
     * VARIABLES START
     */
    var API_URL = jQuery("#BASE_API_URL").val();


    let BASE_SLIM_URL = jQuery("#BASE_SLIM_URL").val();

    $scope.login = new Login();

    $scope.isLoggedIn = true;
    /**
     * VARIABLES END
     */




    /**
     * General functions and definitions START
     * @param success_function
     * @param data_to_use
     */
    $scope.check_email_validity = function(success_function:any, data_to_use:any){
        $http({
            method: 'POST',
            url: BASE_SLIM_URL + "/login/check-admin-email-validity",
            data: data_to_use
        }).success(function (response:any){
            success_function(response);
        }).error(function (response:any, status:any) {

        });
    }

    $http({
        method: 'POST',
        url: "/portal/seo_v2/check_session.php",
        params: {}
    }).success(function (response:any) {

        if (response.success) {
            // Has session
            //$scope.isLoggedIn = true;
            $state.go('seo.dashboard', {});


        } else {
            $scope.isLoggedIn = false;


        }
    }).error(function (response:any, status:any) {

    });
    /**
     * General functions and definitions END
     */



    /**
     * Login functions and definitions START
     */
    $scope.submitLoginForm = function(){
        $scope.login.setErrors(new Array<string>());


        $scope.check_email_validity(function (response:any) {
            if (response.success) {
                $http({
                    method: 'POST',
                    url: BASE_SLIM_URL + "/login/attempt",
                    data: {
                        credentials: $scope.login.toJSON()
                    }
                }).success(function (response:any){
                    if(response.success){


                        $http({
                            method: 'POST',
                            url: "/portal/seo_v2/set_session.php",
                            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                            transformRequest: function(obj) {
                                var str = [];
                                for(var p in obj)
                                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                                return str.join("&");
                            },
                            data: {
                                admin_id: response.details.admin_id,
                                status: response.details.status,
                                email: $scope.login.getEmail()
                            }
                        }).success(function (response:any){
                            window.sessionStorage.setItem("current_session", JSON.stringify(response.admin_details));
                            $state.go('seo.dashboard', {});

                        });



                        let data:any = {
                            email: $scope.login.getEmail(),
                            login_type: "admin",
                            password: $scope.login.getPassword(),
                        };

                        if(response.details.status == "HR"){
                            data.recruiter = true;
                        }
                        $http({
                            method: 'POST',
                            //url: "/portal/seo_v2/login.php",
                            url: "/portal/index.php",
                            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                            transformRequest: function(obj) {
                                var str = [];
                                for(var p in obj)
                                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                                return str.join("&");
                            },
                            data: data

                            // data: {
                            //     email: $scope.login.getEmail(),
                            //     status: response.details.status,
                            //     admin_id: response.details.admin_id
                            // }
                        }).success(function (response:any) {
                            //$state.go('seo.dashboard', {});
                        }).error(function (response:any, status:any) {

                        });
                    } else{
                        $scope.login.setPassword("");
                        response.errors.forEach(function (value) {
                            let found_error_duplicates = $scope.login.getErrors().filter(function (el:string) {
                                return el == value;
                            });
                            if(found_error_duplicates.length <= 0){
                                $scope.login.getErrors().push(value);
                            }
                        });
                    }
                }).error(function (response:any, status:any) {

                });



            } else{
                $scope.login.setPassword("");
                response.errors.forEach(function (value) {
                    let found_error_duplicates = $scope.login.getErrors().filter(function (el:string) {
                        return el == value;
                    });
                    if(found_error_duplicates.length <= 0){
                        $scope.login.getErrors().push(value);
                    }
                });
            }
        }, {
            credentials: $scope.login.toJSON()
        });


    }

    /**
     * Login functions and definitions END
     */




    /**
     * Forget password functions and definitions START
     * @param $scope
     * @param $modalInstance
     * @param $http
     * @param $invoker
     * @param toaster
     * @constructor
     */
    function ForgotPasswordSuccessModalController($scope:any, $modalInstance:any, $http:any, $invoker:any,toaster:any){

        $invoker.close_modal();
        $scope.close_modal = function () {
            $modalInstance.dismiss('modal');
        };


        $scope.forgotPassword = $invoker.forgotPassword;

    }

    function ForgotPasswordModalController($scope:any, $modalInstance:any, $http:any, $invoker:any,toaster:any){
        $scope.close_modal = function () {
            $modalInstance.dismiss('modal');
        };

        $invoker.check_email_validity;


        $scope.forgotPassword = new Login();



        $scope.forgotPasswordFormSubmit = function(){
            $scope.forgotPassword.setErrors(new Array<string>());
            $invoker.check_email_validity(function (response:any) {
                if (response.success) {
                    $http({
                        method: 'POST',
                        url: "/portal/forgotpass.php",
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                        transformRequest: function(obj) {
                            var str = [];
                            for(var p in obj)
                                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                            return str.join("&");
                        },
                        data: {
                            email: $scope.forgotPassword.getEmail(),
                            user: "admin",
                            task: "send_email"
                        }
                    }).success(function (response:any) {

                    }).error(function (response:any, status:any) {

                    });

                    // valid email
                    var modalInstance = $modal.open({
                        templateUrl: 'views/seo/modals/forgotpass-success-modal.html',
                        controller: ForgotPasswordSuccessModalController,
                        windowClass: "animated fadeIn",
                        size: "md",
                        resolve:{

                            $invoker:function(){

                                return $scope;
                            }

                        }
                    });
                } else {
                    response.errors.forEach(function (value) {
                        let found_error_duplicates = $scope.forgotPassword.getErrors().filter(function (el:string) {
                            return el == value;
                        });
                        if(found_error_duplicates.length <= 0){
                            $scope.forgotPassword.getErrors().push(value);
                        }
                    });
                }
            }, {
                credentials: $scope.forgotPassword.toJSON()
            });
        };

    }

    $scope.forgotPassword = function(){
        $scope.login.setPassword("");
        var modalInstance = $modal.open({
            templateUrl: 'views/seo/modals/forgotpass-modal.html',
            controller: ForgotPasswordModalController,
            windowClass: "animated fadeIn",
            size: "md",
            resolve:{

                $invoker:function(){

                    return $scope;
                }

            }
        });
    };



    rs_module.controller('ForgotPasswordSuccessModalController',["$scope", "$modalInstance", "$http", "$invoker", ForgotPasswordSuccessModalController,]);

    rs_module.controller('ForgotPasswordModalController',["$scope", "$modalInstance", "$http", "$invoker", ForgotPasswordModalController,]);
    /**
     * Forget password functions and definitions END
     */

}

rs_module.controller('LoginController', ["$scope", "$sce","$state", "$location", "$http", "$timeout", "$modal", "toaster", LoginPageController]);

