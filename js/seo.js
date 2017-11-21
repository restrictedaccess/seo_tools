function SeoPageController($scope, $sce, $state, $location, $http, $modal, toaster) {
    var API_URL = jQuery("#BASE_API_URL").val();
    $http({
        method: 'POST',
        url: "/portal/seo_v2/check_session.php",
        params: {}
    }).success(function (response) {
        if (response.success) {
        }
        else {
            console.log("SEO Called");
            $state.go('seo.login', {});
        }
    }).error(function (response, status) {
    });
}
rs_module.controller('SeoController', ["$scope", "$sce", "$state", "$location", "$http", "$modal", "toaster", SeoPageController]);
//# sourceMappingURL=seo.js.map