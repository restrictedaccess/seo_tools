


function MainCtrl($scope, $http) {
    var admin_name = jQuery("#ADMIN_NAME").val();
    var admin_id = jQuery("#ADMIN_ID").val();
    var admin_userid = jQuery("#ADMIN_USERID").val();
    $scope.admin_image = jQuery("#ADMIN_IMAGE").val();
    $scope.admin_name = admin_name;
    $scope.admin_id = admin_id;
    $scope.admin_userid = admin_userid;

    $scope.seoLogout = function(){

        window.sessionStorage.removeItem("current_session");

        $http({
            method: 'GET',
            url: "/portal/logout.php",
            params: {}
        }).success(function (response) {

        }).error(function (response, status) {

        });

        $http({
            method: 'GET',
            url: "/portal/seo_v2/logout.php",
            params: {}
        }).success(function (response) {

        }).error(function (response, status) {
        });


    }


}
function formatDate(date) {
    var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;
    return [year, month, day].join('-');
}
function formatDate2(unixtime) {
    var d = new Date(unixtime);
    var n = d.toDateString();
    return n;
}
var rs_module = angular.module('inspinia');
rs_module.controller('MainCtrl', ["$scope", "$http", MainCtrl]);
rs_module.directive("chosen", function () {
    var linker = function (scope, element, attrs) {
        var list = attrs['chosen'];
        scope.$watch(list, function () {
            element.trigger('chosen:updated');
        });
        scope.$watch(attrs['ngModel'], function () {
            element.trigger('chosen:updated');
        });
        element.chosen({ width: '100%' });
    };
    return {
        restrict: 'A',
        link: linker
    };
});
rs_module.directive('andyDraggable', function () {
    return {
        restrict: 'A',
        link: function (scope, elm, attrs) {
            var options = scope.$eval(attrs.andyDraggable);
            elm.draggable(options);
        }
    };
});
function translateCtrl($translate, $scope) {
    $scope.changeLanguage = function (langKey) {
        $translate.use(langKey);
        $scope.language = langKey;
    };
}
function toastrCtrl($scope, toaster) {
}
rs_module.controller('translateCtrl', translateCtrl);
rs_module.controller('toastrCtrl', toastrCtrl);
//# sourceMappingURL=seo_controllers.js.map