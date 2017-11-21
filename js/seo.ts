//declare let rs_module:any;
//declare let jQuery:any;

function SeoPageController($scope:any, $sce:any, $state:any, $location:any, $http:any, $modal:any, toaster:any) {

    var API_URL = jQuery("#BASE_API_URL").val();

    $http({
        method: 'POST',
        url: "/portal/seo_v2/check_session.php",
        params: {}
    }).success(function (response:any) {

        if (response.success) {
            // Has session


        } else {
            console.log("SEO Called");
            $state.go('seo.login', {});
        }
    }).error(function (response:any, status:any) {

    });

}

rs_module.controller('SeoController', ["$scope", "$sce", "$state", "$location", "$http", "$modal", "toaster", SeoPageController]);

