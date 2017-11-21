define(["require", "exports", "../models/SubCategory", "../models/Category", "../models/Admin"], function (require, exports, SubCategory_1, Category_1, Admin_1) {
    "use strict";
    function CategoriesPageController($scope, $sce, $state, $location, $http, $timeout, $modal, toaster) {
        var API_URL = jQuery("#BASE_API_URL").val();
        var BASE_SLIM_URL = jQuery("#BASE_SLIM_URL").val();
        var current_session = null;
        if (typeof window.sessionStorage.getItem("current_session") !== "undefined" && window.sessionStorage.getItem("current_session") !== null) {
            current_session = JSON.parse(window.sessionStorage.getItem("current_session"));
        }
        if (current_session) {
            jQuery("#ADMIN_ID").val(current_session.admin_id);
            jQuery("#ADMIN_NAME").val(current_session.admin_fname + " " + current_session.admin_lname);
            $timeout(function () {
                jQuery("#admin_name_placeholder").text(current_session.admin_fname + " " + current_session.admin_lname);
            }, 1000);
        }
        else {
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
            $state.go('admin.login', {});
        }
        $scope.isLoggedIn = false;
        $scope.optionSummernote = {
            height: 160,
            color: "white",
            disableResizeEditor: true,
            toolbar: [
                ['style', ['bold', 'italic', 'underline', 'clear']],
                ['fontname', ['fontname']],
                ['fontsize', ['fontsize']],
                ['para', ['ul', 'ol', 'paragraph']],
            ]
        };
        $scope.statusCategoryList = [
            "new",
            "posted",
            "removed"
        ];
        $scope.statusSubCategoryList = [
            "new",
            "posted",
        ];
        $http({
            method: 'POST',
            url: "/portal/seo_v2/check_session.php",
            params: {}
        }).success(function (response) {
            if (response) {
                $scope.isLoggedIn = true;
                var categoriesList = [];
                $scope.categoriesList = [];
                $scope.subCategoriesList = new Array();
                $scope.collapseCategoryList = [];
                $scope.categoryNewInputNamesList = [];
                if (typeof localStorage.getItem("filter_defaults_categories_sorted") != "undefined" && localStorage.getItem("filter_defaults_categories_sorted") != null) {
                    categoriesList = JSON.parse(localStorage.getItem("filter_defaults_categories_sorted"));
                }
                var newArray_1 = [];
                categoriesList.forEach(function (item, key) {
                    var category = new Category_1.Category();
                    category.setId(parseInt(item.details.category_id));
                    category.setName(item.details.category_name);
                    category.setSingularName(item.details.singular_name);
                    category.setStatus(item.details.status);
                    category.setUrl(item.complete_details.url);
                    category.setDescription(item.complete_details.description);
                    category.setTitle(item.complete_details.title);
                    category.setKeywords(item.complete_details.keywords);
                    if (item.complete_details.meta_description !== null) {
                        category.setMetaDescription(item.complete_details.meta_description);
                    }
                    else {
                        category.setMetaDescription("");
                    }
                    category.setPageHeader(item.complete_details.page_header);
                    category.setPageDescription(item.complete_details.page_description);
                    category.setAslH1(item.complete_details.asl_h1);
                    category.setAslH2(item.complete_details.asl_h2);
                    category.setSubCategories(new Array());
                    $scope.collapseCategoryList[category.getId()] = true;
                    $scope.categoryNewInputNamesList[category.getId()] = "";
                    var previous_category = new Category_1.Category();
                    previous_category.setId(parseInt(item.details.category_id));
                    previous_category.setName(item.details.category_name);
                    item.sub_categories.forEach(function (item_sub_category, key_sub_category) {
                        var subCategory = new SubCategory_1.SubCategory();
                        subCategory.setId(parseInt(item_sub_category.sub_category_id));
                        subCategory.setName(item_sub_category.sub_category_name);
                        subCategory.setSingularName(item_sub_category.singular_name);
                        subCategory.setStatus(item_sub_category.status);
                        subCategory.setUrl(item_sub_category.complete_details.url);
                        subCategory.setDescription(item_sub_category.complete_details.description);
                        subCategory.setTitle(item_sub_category.complete_details.title);
                        subCategory.setKeywords(item_sub_category.complete_details.keywords);
                        if (item_sub_category.complete_details.meta_description !== null) {
                            subCategory.setMetaDescription(item_sub_category.complete_details.meta_description);
                        }
                        else {
                            subCategory.setMetaDescription("");
                        }
                        subCategory.setPageHeader(item_sub_category.complete_details.page_header);
                        subCategory.setPageDescription(item_sub_category.complete_details.page_description);
                        subCategory.setAslH1(item_sub_category.complete_details.asl_h1);
                        subCategory.setAslH2(item_sub_category.complete_details.asl_h2);
                        subCategory.setCategory(category);
                        previous_category.getSubCategories().push(subCategory);
                        subCategory.setPreviousCategory(previous_category);
                        category.getSubCategories().push(subCategory);
                        $scope.subCategoriesList.push(subCategory);
                    });
                    newArray_1.push(category);
                });
                $scope.categoriesList = newArray_1;
                $scope.selectedItem = {
                    type: "",
                    item: null,
                    name: ""
                };
                $scope.words_data_meta_description = {
                    remaining: 180,
                    limit: 180
                };
                $scope.chars_data_title = {
                    remaining: 60,
                    limit: 60
                };
                $scope.limitMetaDescription = function () {
                    var s = [];
                    if (typeof $scope.selectedItem.item.getMetaDescription() !== "undefined"
                        && $scope.selectedItem.item.getMetaDescription() != null
                        && $scope.selectedItem.item.getMetaDescription() != "") {
                        s = $scope.selectedItem.item.getMetaDescription().trim().split(/\s+/);
                    }
                    var current_word_count = 0;
                    if (s.length > 0) {
                        current_word_count = s.length;
                    }
                    $scope.words_data_meta_description.remaining = $scope.words_data_meta_description.limit - current_word_count;
                };
                $scope.limitTitle = function () {
                    if (typeof $scope.selectedItem.item.getTitle() !== "undefined"
                        && $scope.selectedItem.item.getTitle() !== null) {
                        $scope.chars_data_title.remaining = $scope.chars_data_title.limit - $scope.selectedItem.item.getTitle().length;
                    }
                    else {
                        $scope.chars_data_title.remaining = $scope.chars_data_title.limit;
                    }
                };
                $scope.selectItemCategory = function (category) {
                    var category_name = "";
                    if (category === null) {
                        category = new Category_1.Category();
                        category.setStatus("new");
                        category_name = "New Category";
                    }
                    else {
                        category_name = category.getName();
                    }
                    $scope.collapseCategoryList.forEach(function (value, index) {
                        if (category.getId() != index) {
                            $scope.collapseCategoryList[index] = true;
                        }
                    });
                    $scope.collapseCategoryList[category.getId()] = !$scope.collapseCategoryList[category.getId()];
                    $scope.selectedItem = {
                        type: "category",
                        item: category,
                        name: category_name
                    };
                    $scope.limitMetaDescription();
                    $scope.limitTitle();
                };
                $scope.selectItemSubCategory = function (sub_category) {
                    var sub_category_name = "";
                    if (sub_category === null) {
                        sub_category = new SubCategory_1.SubCategory();
                        sub_category.setStatus("new");
                        sub_category_name = "New Sub Category";
                    }
                    else {
                        sub_category_name = sub_category.getName();
                    }
                    $scope.selectedItem = {
                        type: "sub_category",
                        item: sub_category,
                        name: sub_category_name
                    };
                    $scope.limitMetaDescription();
                    $scope.limitTitle();
                };
                $scope.addNewSubCategory = function (key_category) {
                    var category = $scope.categoriesList[key_category];
                    var new_sub_category_name = $scope.categoryNewInputNamesList[category.getId()];
                    var duplicates = $scope.subCategoriesList.filter(function (el) {
                        return (el.getName().toUpperCase() == new_sub_category_name.toUpperCase());
                    });
                    if (duplicates !== null) {
                        if (duplicates.length > 0) {
                            var duplicate = duplicates.pop();
                            alert("Sub Category already added in\n" + duplicate.getCategory().getName() + " Category!");
                            return true;
                        }
                    }
                    var sub_category = new SubCategory_1.SubCategory();
                    sub_category.setCategory(category);
                    sub_category.setName(new_sub_category_name);
                    sub_category.setStatus("new");
                    category.getSubCategories().push(sub_category);
                    $scope.selectedItem = {
                        type: "sub_category",
                        item: sub_category,
                        name: new_sub_category_name
                    };
                    $scope.categoryNewInputNamesList[category.getId()] = "";
                    $scope.limitMetaDescription();
                    $scope.limitTitle();
                };
                $scope.submitCategoryForm = function () {
                    var admin = new Admin_1.Admin();
                    admin.setId(jQuery("#ADMIN_ID").val());
                    if ($scope.selectedItem.item.getId() == null) {
                        $http({
                            method: 'POST',
                            url: BASE_SLIM_URL + "/seo/add-category",
                            data: {
                                category: $scope.selectedItem.item.toJSON(),
                                admin: admin.toJSON()
                            }
                        }).success(function (response) {
                            if (response.success) {
                                alert("Category successfully added!");
                                $scope.selectedItem.item.setId(response.category_added.category_id);
                                $scope.categoriesList.push($scope.selectedItem.item);
                                $scope.categoryNewInputNamesList[response.category_added.category_id] = "";
                                $scope.collapseCategoryList[response.category_added.category_id] = false;
                            }
                            else {
                            }
                        }).error(function (response, status) {
                            if ($scope.selectedItem.item.getId() == null) {
                                toaster.pop({
                                    type: 'error',
                                    title: "Save Category Failed.",
                                    body: response.exception[0].message,
                                    showCloseButton: true,
                                });
                            }
                        });
                    }
                    else {
                        $http({
                            method: 'POST',
                            url: BASE_SLIM_URL + "/seo/update-category",
                            data: {
                                category: $scope.selectedItem.item.toJSON(),
                                admin: admin.toJSON()
                            }
                        }).success(function (response) {
                            if (response.success) {
                                alert("Category successfully updated!");
                            }
                            else {
                            }
                        }).error(function (response, status) {
                            if ($scope.selectedItem.item.getId() !== null) {
                                toaster.pop({
                                    type: 'error',
                                    title: "Save Category Failed.",
                                    body: response.exception[0].message,
                                    showCloseButton: true,
                                });
                            }
                        });
                    }
                };
                $scope.submitSubCategoryForm = function () {
                    var admin = new Admin_1.Admin();
                    admin.setId(jQuery("#ADMIN_ID").val());
                    if ($scope.selectedItem.item.getId() == null) {
                        $http({
                            method: 'POST',
                            url: BASE_SLIM_URL + "/seo/add-sub-category",
                            data: {
                                sub_category: $scope.selectedItem.item.toJSON(),
                                admin: admin.toJSON()
                            }
                        }).success(function (response) {
                            if (response.success) {
                                alert("Sub Category successfully added!");
                                $scope.selectedItem.item.setId(response.sub_category_added.sub_category_id);
                            }
                            else {
                            }
                        }).error(function (response, status) {
                            if ($scope.selectedItem.item.getId() == null) {
                                toaster.pop({
                                    type: 'error',
                                    title: "Save Category Failed.",
                                    body: response.exception[0].message,
                                    showCloseButton: true,
                                });
                            }
                        });
                    }
                    else {
                        $http({
                            method: 'POST',
                            url: BASE_SLIM_URL + "/seo/update-sub-category",
                            data: {
                                sub_category: $scope.selectedItem.item.toJSON(),
                                admin: admin.toJSON()
                            }
                        }).success(function (response) {
                            if (response.success) {
                                alert("Sub Category successfully updated!");
                                if ($scope.selectedItem.item.getPreviousCategory().getId() != $scope.selectedItem.item.getCategory().getId()) {
                                    var previous_category = $scope.selectedItem.item.getPreviousCategory();
                                    var current_category = $scope.selectedItem.item.getCategory();
                                    var sub_category_index_1 = -1;
                                    previous_category.getSubCategories().filter(function (el, index) {
                                        console.log((el.getId() == $scope.selectedItem.item.getId()) + " " + el.getId() + " " + $scope.selectedItem.item.getId());
                                        if (el.getId() == $scope.selectedItem.item.getId()) {
                                            sub_category_index_1 = index;
                                        }
                                        return (el.getId() == $scope.selectedItem.item.getId());
                                    });
                                    console.log(sub_category_index_1);
                                    previous_category.getSubCategories().splice(sub_category_index_1, 0);
                                    current_category.getSubCategories().push($scope.selectedItem.item);
                                    $scope.collapseCategoryList.forEach(function (value, index, array) {
                                        $scope.collapseCategoryList[index] = true;
                                    });
                                    $scope.collapseCategoryList[current_category.getId()] = false;
                                    $scope.selectedItem.item.setPreviousCategory(angular.copy(current_category));
                                }
                            }
                            else {
                            }
                        }).error(function (response, status) {
                            if ($scope.selectedItem.item.getId() !== null) {
                                toaster.pop({
                                    type: 'error',
                                    title: "Save Sub Category Failed.",
                                    body: response.exception[0].message,
                                    showCloseButton: true,
                                });
                            }
                        });
                    }
                };
                $scope.isSubCategorySelected = function (sub_category) {
                    var current_class = "";
                    if ($scope.selectedItem.item !== null) {
                        if (sub_category.getName() == $scope.selectedItem.item.getName()) {
                            current_class = "font-bold-900";
                        }
                    }
                    return current_class;
                };
                $http({
                    method: 'GET',
                    url: BASE_SLIM_URL + "/filter-query/all-categories",
                    params: {
                        fetch_all: true
                    }
                }).success(function (response) {
                    var newArray = [];
                    response.result.categories.forEach(function (item, key) {
                        var category = new Category_1.Category();
                        category.setId(parseInt(item.details.category_id));
                        category.setName(item.details.category_name);
                        category.setSingularName(item.details.singular_name);
                        category.setStatus(item.details.status);
                        category.setUrl(item.complete_details.url);
                        category.setDescription(item.complete_details.description);
                        category.setTitle(item.complete_details.title);
                        category.setKeywords(item.complete_details.keywords);
                        if (item.complete_details.meta_description !== null) {
                            category.setMetaDescription(item.complete_details.meta_description);
                        }
                        else {
                            category.setMetaDescription("");
                        }
                        category.setPageHeader(item.complete_details.page_header);
                        category.setPageDescription(item.complete_details.page_description);
                        category.setAslH1(item.complete_details.asl_h1);
                        category.setAslH2(item.complete_details.asl_h2);
                        category.setSubCategories(new Array());
                        $scope.collapseCategoryList[category.getId()] = true;
                        var previous_category = new Category_1.Category();
                        previous_category.setId(parseInt(item.details.category_id));
                        previous_category.setName(item.details.category_name);
                        item.sub_categories.forEach(function (item_sub_category, key_sub_category) {
                            var subCategory = new SubCategory_1.SubCategory();
                            subCategory.setId(parseInt(item_sub_category.sub_category_id));
                            subCategory.setName(item_sub_category.sub_category_name);
                            subCategory.setSingularName(item_sub_category.singular_name);
                            subCategory.setStatus(item_sub_category.status);
                            subCategory.setUrl(item_sub_category.complete_details.url);
                            subCategory.setDescription(item_sub_category.complete_details.description);
                            subCategory.setTitle(item_sub_category.complete_details.title);
                            subCategory.setKeywords(item_sub_category.complete_details.keywords);
                            if (item_sub_category.complete_details.meta_description !== null) {
                                subCategory.setMetaDescription(item_sub_category.complete_details.meta_description);
                            }
                            else {
                                subCategory.setMetaDescription("");
                            }
                            subCategory.setPageHeader(item_sub_category.complete_details.page_header);
                            subCategory.setPageDescription(item_sub_category.complete_details.page_description);
                            subCategory.setAslH1(item_sub_category.complete_details.asl_h1);
                            subCategory.setAslH2(item_sub_category.complete_details.asl_h2);
                            subCategory.setCategory(category);
                            previous_category.getSubCategories().push(subCategory);
                            subCategory.setPreviousCategory(previous_category);
                            category.getSubCategories().push(subCategory);
                            $scope.subCategoriesList.push(subCategory);
                        });
                        newArray.push(category);
                    });
                    $scope.categoriesList = newArray;
                    localStorage.setItem("filter_defaults_categories_sorted", JSON.stringify(response.result.categories));
                }).error(function (response, status) {
                });
            }
            else {
                $state.go('admin.login', {});
            }
        }).error(function (response, status) {
        });
        var accept = ".csv";
        var addedDropzone = null;
    }
    rs_module.controller('CategoriesController', ["$scope", "$sce", "$state", "$location", "$http", "$timeout", "$modal", "toaster", CategoriesPageController]);
});
//# sourceMappingURL=categories.js.map