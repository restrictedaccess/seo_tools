define(["require", "exports", "../models/Skills"], function (require, exports, Skills_1) {
    "use strict";
    function SkillsPageController($scope, $sce, $state, $location, $http, $modal, $filter, toaster) {
        var API_URL = jQuery("#BASE_API_URL").val();
        var BASE_SLIM_URL = jQuery("#BASE_SLIM_URL").val();
        $scope.skillsList = new Array();
        $scope.skillsSearchQuery = "";
        $scope.isLoggedIn = true;
        $scope.filteredskillsList = []
            , $scope.currentPage = 1
            , $scope.numPerPage = 10
            , $scope.maxSize = 5;
        $scope.fetchSkills = function (success_function) {
            $http({
                method: 'GET',
                url: BASE_SLIM_URL + "/seo/get-skills",
            }).success(function (response) {
                console.log("Skills..");
                console.log(response);
                if (typeof response.data !== "undefined") {
                    response.data.forEach(function (item, key) {
                        var new_skills = new Skills_1.Skills();
                        new_skills.init(item);
                        $scope.skillsList.push(new_skills);
                    });
                }
                $scope.$watch("currentPage + numPerPage", function () {
                    var begin = (($scope.currentPage - 1) * $scope.numPerPage), end = begin + $scope.numPerPage;
                    $scope.filteredskillsList = $scope.skillsList.slice(begin, end);
                });
            }).error(function (response, status) {
                console.log("Error fetching skills..");
            });
        };
        $scope.fetchSkills();
    }
    rs_module.controller('SkillsController', ["$scope", "$sce", "$state", "$location", "$http", "$modal", "$filter", "toaster", SkillsPageController]);
});
//# sourceMappingURL=skills.js.map