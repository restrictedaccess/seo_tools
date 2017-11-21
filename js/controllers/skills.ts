/**
 * Created by IT on 10/6/2016.
 */
import {Skills} from "../models/Skills";
/**
 * Created by IT on 10/4/2016.
 */
function SkillsPageController($scope:any, $sce:any, $state:any, $location:any, $http:any, $modal:any, $filter:any, toaster:any) {

    /**
     * VARIABLES START
     */
    var API_URL = jQuery("#BASE_API_URL").val();


    let BASE_SLIM_URL = jQuery("#BASE_SLIM_URL").val();

    //$scope.skills = new Skills();
    $scope.skillsList = new Array<Skills>();
    $scope.skillsSearchQuery = "";
    $scope.isLoggedIn = true;
    /**
     * VARIABLES END
     */

    // Fetch SEO V2 Skills
    // Pagination
    $scope.filteredskillsList = []
        , $scope.currentPage = 1
        , $scope.numPerPage = 10
        , $scope.maxSize = 5;

    $scope.fetchSkills = function (success_function:any) {
        $http({
            method: 'GET',
            url: BASE_SLIM_URL + "/seo/get-skills",
        }).success(function (response:any) {

            console.log("Skills..");
            console.log(response);


            if (typeof response.data !== "undefined") {

                response.data.forEach(function (item:any, key:any) {

                    let new_skills = new Skills();
                    new_skills.init(item);

                    $scope.skillsList.push(new_skills);
                });


            }

            $scope.$watch("currentPage + numPerPage", function() {
                var begin = (($scope.currentPage - 1) * $scope.numPerPage)
                    , end = begin + $scope.numPerPage;

                $scope.filteredskillsList = $scope.skillsList.slice(begin, end);
            });


        }).error(function (response:any, status:any) {
            console.log("Error fetching skills..");
        });
    }

    $scope.fetchSkills();

    // var searchMatch = function (haystack:any, needle:any) {
    //
    //     console.log("Needle is "+needle);
    //
    //     if (!needle) {
    //         return true;
    //     }
    //
    //     console.log(haystack.toLowerCase().indexOf(needle.toLowerCase()));
    //
    //     return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
    // };
    //
    // $scope.searchSkills = function () {
    //     console.log("Searching...");
    //     $scope.filteredskillsList = $filter('filter')($scope.filteredskillsList, function (item) {
    //         for(var attr in item) {
    //             if (searchMatch(item.skillName, $scope.skillsSearchQuery)){
    //                 return true;
    //             }
    //         }
    //         return false;
    //     });
    //
    // }
}

rs_module.controller('SkillsController', ["$scope", "$sce", "$state", "$location", "$http", "$modal", "$filter", "toaster", SkillsPageController]);


