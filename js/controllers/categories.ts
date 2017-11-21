import {SubCategory} from "../models/SubCategory";
import {Category} from "../models/Category";
import {Admin} from "../models/Admin";
/**
 * Created by IT on 10/4/2016.
 */
declare let rs_module: any;
declare let jQuery: any;
declare let angular: any;
declare let window:any;

function CategoriesPageController($scope: any, $sce: any, $state: any, $location: any, $http: any, $timeout:any, $modal: any, toaster: any) {

    var API_URL = jQuery("#BASE_API_URL").val();
    let BASE_SLIM_URL = jQuery("#BASE_SLIM_URL").val();


    /**
     * ALWAYS DO THIS TO ALL
     */
    let current_session = null;

    if(typeof window.sessionStorage.getItem("current_session") !== "undefined" && window.sessionStorage.getItem("current_session") !== null){
        current_session = JSON.parse(window.sessionStorage.getItem("current_session"));
    }

    if(current_session){
        jQuery("#ADMIN_ID").val(current_session.admin_id);
        jQuery("#ADMIN_NAME").val(current_session.admin_fname + " " + current_session.admin_lname);

        $timeout(function(){
            jQuery("#admin_name_placeholder").text(current_session.admin_fname + " " + current_session.admin_lname);
        }, 1000);

    } else{
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
    /**
     * ALWAYS DO THIS TO ALL
     */

    /**
     *
     * $http({
        method: 'POST',
        url: "/portal/seo_v2/check_session.php",
        params: {}
    }).success(function (response:any) {

        if (response.success) {
            // Has session
            //DO all definitions and instantiations here
            $scope.isLoggedIn = true;

            $scope.isCollapsed = false;






        } else {

            $state.go('admin.login', {});
        }
    }).error(function (response:any, status:any) {

    });
     */

    $scope.isLoggedIn = false;






    $scope.optionSummernote = {
        height: 160,
        color: "white",
        disableResizeEditor: true,
        toolbar: [
            //['style', ['bold', 'italic', 'clear']],
            ['style', ['bold', 'italic', 'underline', 'clear']],
            // ['fontsize', ['fontsize']],
            // ['color', ['color']],
            ['fontname', ['fontname']],
            ['fontsize', ['fontsize']],
            ['para', ['ul', 'ol', 'paragraph']],
            // ['height', ['height']]
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
    }).success(function (response: any) {

        if (response) {
            // Has session
            //DO all definitions and instantiations here
            $scope.isLoggedIn = true;

            let categoriesList = [];

            $scope.categoriesList = [];

            $scope.subCategoriesList = new Array<SubCategory>();

            $scope.collapseCategoryList = [];

            $scope.categoryNewInputNamesList = [];

            if (typeof localStorage.getItem("filter_defaults_categories_sorted") != "undefined" && localStorage.getItem("filter_defaults_categories_sorted") != null) {
                categoriesList = JSON.parse(localStorage.getItem("filter_defaults_categories_sorted"));
            }


            let newArray = [];

            categoriesList.forEach(function (item: any, key: any) {

                var category = new Category();
                category.setId(parseInt(item.details.category_id));
                category.setName(item.details.category_name);
                category.setSingularName(item.details.singular_name);
                category.setStatus(item.details.status);
                category.setUrl(item.complete_details.url);
                category.setDescription(item.complete_details.description);
                category.setTitle(item.complete_details.title);
                category.setKeywords(item.complete_details.keywords);
                if(item.complete_details.meta_description !== null){
                    category.setMetaDescription(item.complete_details.meta_description);
                } else{
                    category.setMetaDescription("");
                }
                //category.setMetaDescription(item.complete_details.meta_description);
                category.setPageHeader(item.complete_details.page_header);
                category.setPageDescription(item.complete_details.page_description);
                category.setAslH1(item.complete_details.asl_h1);
                category.setAslH2(item.complete_details.asl_h2);

                category.setSubCategories(new Array<SubCategory>());
                $scope.collapseCategoryList[category.getId()] = true;

                $scope.categoryNewInputNamesList[category.getId()] = "";


                let previous_category = new Category();
                previous_category.setId(parseInt(item.details.category_id));
                previous_category.setName(item.details.category_name);

                item.sub_categories.forEach(function (item_sub_category: any, key_sub_category: any) {
                    // current_category_obj = {
                    //     category_name:item.details.category_name,
                    //     sub_category_name:item_sub_category.sub_category_name,
                    //     sub_category_id:item_sub_category.sub_category_id
                    // };
                    var subCategory = new SubCategory();

                    subCategory.setId(parseInt(item_sub_category.sub_category_id));
                    subCategory.setName(item_sub_category.sub_category_name);
                    subCategory.setSingularName(item_sub_category.singular_name);
                    subCategory.setStatus(item_sub_category.status);
                    subCategory.setUrl(item_sub_category.complete_details.url);
                    subCategory.setDescription(item_sub_category.complete_details.description);
                    subCategory.setTitle(item_sub_category.complete_details.title);
                    subCategory.setKeywords(item_sub_category.complete_details.keywords);
                    if(item_sub_category.complete_details.meta_description !== null){
                        subCategory.setMetaDescription(item_sub_category.complete_details.meta_description);
                    } else{
                        subCategory.setMetaDescription("");
                    }
                    //subCategory.setMetaDescription(item_sub_category.complete_details.meta_description);
                    subCategory.setPageHeader(item_sub_category.complete_details.page_header);
                    subCategory.setPageDescription(item_sub_category.complete_details.page_description);
                    subCategory.setAslH1(item_sub_category.complete_details.asl_h1);
                    subCategory.setAslH2(item_sub_category.complete_details.asl_h2);

                    subCategory.setCategory(category);

                    previous_category.getSubCategories().push(subCategory);

                    subCategory.setPreviousCategory(previous_category);

                    //subCategory.setPreviousCategory(angular.copy(category));

                    category.getSubCategories().push(subCategory);


                    $scope.subCategoriesList.push(subCategory);


                });


                newArray.push(category);

            });



            $scope.categoriesList = newArray;

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



            $scope.limitMetaDescription = function(){
                let s = [];

                if(typeof (<Category>$scope.selectedItem.item).getMetaDescription() !== "undefined"
                    && (<Category>$scope.selectedItem.item).getMetaDescription() != null
                    && (<Category>$scope.selectedItem.item).getMetaDescription() != ""){
                    s = (<Category>$scope.selectedItem.item).getMetaDescription().trim().split(/\s+/);
                }



                //var s = (<Category>$scope.selectedItem.item).getMetaDescription() ? (<Category>$scope.selectedItem.item).getMetaDescription().split(/\s+/) : []; // it splits the text on space/tab/enter

                let current_word_count = 0;


                if(s.length > 0){
                    current_word_count = s.length;
                }
                $scope.words_data_meta_description.remaining = $scope.words_data_meta_description.limit - current_word_count;
            }

            $scope.limitTitle = function(){
                if(typeof (<Category>$scope.selectedItem.item).getTitle() !== "undefined"
                    && (<Category>$scope.selectedItem.item).getTitle() !== null){
                    $scope.chars_data_title.remaining = $scope.chars_data_title.limit - (<Category>$scope.selectedItem.item).getTitle().length;
                } else{
                    $scope.chars_data_title.remaining = $scope.chars_data_title.limit;
                }

            }


            $scope.selectItemCategory = function (category: Category) {

                let category_name = "";

                if (category === null) {
                    category = new Category();
                    category.setStatus("new");
                    category_name = "New Category";
                } else {
                    category_name = category.getName();
                }


                //$scope.isCollapsed = !$scope.isCollapsed;

                $scope.collapseCategoryList.forEach(function (value: any, index: number) {
                    if (category.getId() != index) {
                        $scope.collapseCategoryList[index] = true;
                    }

                });

                $scope.collapseCategoryList[category.getId()] = !$scope.collapseCategoryList[category.getId()];


                //$scope.selectedItem = category
                $scope.selectedItem = {
                    type: "category",
                    item: category,
                    name: category_name
                };

                $scope.limitMetaDescription();
                $scope.limitTitle();



            }


            $scope.selectItemSubCategory = function (sub_category: SubCategory) {

                let sub_category_name = "";

                if (sub_category === null) {
                    sub_category = new SubCategory();
                    sub_category.setStatus("new");

                    sub_category_name = "New Sub Category";
                } else {
                    sub_category_name = sub_category.getName();
                }

                $scope.selectedItem = {
                    type: "sub_category",
                    item: sub_category,
                    name: sub_category_name
                };

                $scope.limitMetaDescription();
                $scope.limitTitle();
            }

            $scope.addNewSubCategory = function (key_category: number) {
                let category = $scope.categoriesList[key_category];

                let new_sub_category_name = $scope.categoryNewInputNamesList[category.getId()];

                //look for duplicates
                let duplicates = $scope.subCategoriesList.filter(function (el: SubCategory) {
                    return (el.getName().toUpperCase() == new_sub_category_name.toUpperCase());
                });


                if(duplicates !== null){
                    if (duplicates.length > 0) {
                        let duplicate = duplicates.pop();
                        alert("Sub Category already added in\n" + duplicate.getCategory().getName() + " Category!");


                        return true;
                    }
                }


                let sub_category = new SubCategory();
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
            }


            $scope.submitCategoryForm = function(){

                let admin = new Admin();

                admin.setId(jQuery("#ADMIN_ID").val());

                if($scope.selectedItem.item.getId() == null){
                    //ADD if category_id is null
                    $http({
                        method: 'POST',
                        url: BASE_SLIM_URL + "/seo/add-category",
                        data: {
                            category: $scope.selectedItem.item.toJSON(),
                            admin:admin.toJSON()
                        }
                    }).success(function (response:any) {

                        if (response.success) {

                            alert("Category successfully added!");

                            $scope.selectedItem.item.setId(response.category_added.category_id);

                            $scope.categoriesList.push($scope.selectedItem.item);

                            $scope.categoryNewInputNamesList[response.category_added.category_id] = "";

                            $scope.collapseCategoryList[response.category_added.category_id] = false;

                        } else {

                        }
                    }).error(function (response:any, status:any) {

                        //alert(response.exception[0].message);

                        if($scope.selectedItem.item.getId() == null){
                            toaster.pop({
                                type: 'error',
                                title: "Save Category Failed.",
                                body: response.exception[0].message,
                                showCloseButton: true,
                            });
                        }

                    });
                } else{
                    //update if category_id is not null
                    $http({
                        method: 'POST',
                        url: BASE_SLIM_URL + "/seo/update-category",
                        data: {
                            category: $scope.selectedItem.item.toJSON(),
                            admin:admin.toJSON()
                        }
                    }).success(function (response:any) {

                        if (response.success) {

                            alert("Category successfully updated!");
                            //
                            // $scope.selectedItem.item.setId(response.category_added.category_id);
                            //
                            // $scope.categoriesList.push($scope.selectedItem.item);
                            //
                            // $scope.categoryNewInputNamesList[response.category_added.category_id] = "";
                            //
                            // $scope.collapseCategoryList[response.category_added.category_id] = false;

                        } else {

                        }
                    }).error(function (response:any, status:any) {

                        //alert(response.exception[0].message);

                        if($scope.selectedItem.item.getId() !== null){
                            toaster.pop({
                                type: 'error',
                                title: "Save Category Failed.",
                                body: response.exception[0].message,
                                showCloseButton: true,
                            });
                        }

                    });
                }



            }


            $scope.submitSubCategoryForm = function(){
                let admin = new Admin();

                admin.setId(jQuery("#ADMIN_ID").val());

                //console.log($scope.selectedItem.item);

                if($scope.selectedItem.item.getId() == null){
                    //ADD if category_id is null
                    $http({
                        method: 'POST',
                        url: BASE_SLIM_URL + "/seo/add-sub-category",
                        data: {
                            sub_category: $scope.selectedItem.item.toJSON(),
                            admin:admin.toJSON()
                        }
                    }).success(function (response:any) {

                        if (response.success) {

                            alert("Sub Category successfully added!");

                            $scope.selectedItem.item.setId(response.sub_category_added.sub_category_id);

                            //$scope.categoriesList.push($scope.selectedItem.item);

                            // let categories_found = $scope.categoriesList.filter(function (el:Category) {
                            //     return (el.getId() ==  response.sub_category_added.category.category_id);
                            // });



                            //$scope.categoryNewInputNamesList[response.category_added.category_id] = "";

                            //$scope.collapseCategoryList[response.category_added.category_id] = false;

                        } else {

                        }
                    }).error(function (response:any, status:any) {

                        //alert(response.exception[0].message);

                        if($scope.selectedItem.item.getId() == null){
                            toaster.pop({
                                type: 'error',
                                title: "Save Category Failed.",
                                body: response.exception[0].message,
                                showCloseButton: true,
                            });
                        }

                    });
                } else{
                    //update if sub_category_id is not null
                    $http({
                        method: 'POST',
                        url: BASE_SLIM_URL + "/seo/update-sub-category",
                        data: {
                            sub_category: $scope.selectedItem.item.toJSON(),
                            admin:admin.toJSON()
                        }
                    }).success(function (response:any) {

                        if (response.success) {

                            alert("Sub Category successfully updated!");
                            //
                            // $scope.selectedItem.item.setId(response.category_added.category_id);
                            //
                            // $scope.categoriesList.push($scope.selectedItem.item);
                            //
                            // $scope.categoryNewInputNamesList[response.category_added.category_id] = "";
                            //
                            // $scope.collapseCategoryList[response.category_added.category_id] = false;

                            //remove from current category
                            // let categories_found = $scope.categoriesList.filter(function (el:Category) {
                            //     return (el.getId() ==  response.sub_category_added.category.category_id);
                            // });


                            if($scope.selectedItem.item.getPreviousCategory().getId() != $scope.selectedItem.item.getCategory().getId()){
                                let previous_category = $scope.selectedItem.item.getPreviousCategory();

                                let current_category = $scope.selectedItem.item.getCategory();

                                let sub_category_index = -1;

                                previous_category.getSubCategories().filter(function(el:SubCategory, index:number){

                                    console.log((el.getId() == $scope.selectedItem.item.getId()) + " " + el.getId() + " " + $scope.selectedItem.item.getId());
                                    if(el.getId() == $scope.selectedItem.item.getId()){
                                        sub_category_index = index;
                                    }
                                    return (el.getId() == $scope.selectedItem.item.getId());
                                });

                                console.log(sub_category_index);

                                previous_category.getSubCategories().splice(sub_category_index, 0);

                                current_category.getSubCategories().push($scope.selectedItem.item);


                                //open collapse
                                //$scope.collapseCategoryList[current_category.getId()] = true;

                                //collapse all
                                $scope.collapseCategoryList.forEach(function (value:any, index:number, array:any) {
                                    $scope.collapseCategoryList[index] = true;
                                });

                                //open current_category
                                $scope.collapseCategoryList[current_category.getId()] = false;

                                $scope.selectedItem.item.setPreviousCategory(angular.copy(current_category));

                            }

                        } else {

                        }
                    }).error(function (response:any, status:any) {

                        //alert(response.exception[0].message);

                        if($scope.selectedItem.item.getId() !== null){
                            toaster.pop({
                                type: 'error',
                                title: "Save Sub Category Failed.",
                                body: response.exception[0].message,
                                showCloseButton: true,
                            });
                        }

                    });
                }
            }


            $scope.isSubCategorySelected = function(sub_category:SubCategory){
                //console.log(sub_category);

                let current_class = "";

                //return "font-bold-900";

                if($scope.selectedItem.item !== null){
                    if(sub_category.getName() == $scope.selectedItem.item.getName()){
                        current_class = "font-bold-900";
                    }

                }

                return current_class;
            }


            $http({
                method: 'GET',
                url: BASE_SLIM_URL + "/filter-query/all-categories",
                params: {
                    fetch_all: true
                }
            }).success(function (response: any) {


                // Has session
                //$scope.isCollapsed = false;
                let newArray = [];

                response.result.categories.forEach(function (item: any, key: any) {

                    var category = new Category();

                    category.setId(parseInt(item.details.category_id));
                    category.setName(item.details.category_name);
                    category.setSingularName(item.details.singular_name);
                    category.setStatus(item.details.status);
                    category.setUrl(item.complete_details.url);
                    category.setDescription(item.complete_details.description);
                    category.setTitle(item.complete_details.title);
                    category.setKeywords(item.complete_details.keywords);
                    if(item.complete_details.meta_description !== null){
                        category.setMetaDescription(item.complete_details.meta_description);
                    } else{
                        category.setMetaDescription("");
                    }

                    category.setPageHeader(item.complete_details.page_header);
                    category.setPageDescription(item.complete_details.page_description);
                    category.setAslH1(item.complete_details.asl_h1);
                    category.setAslH2(item.complete_details.asl_h2);


                    category.setSubCategories(new Array<SubCategory>());
                    $scope.collapseCategoryList[category.getId()] = true;


                    let previous_category = new Category();
                    previous_category.setId(parseInt(item.details.category_id));
                    previous_category.setName(item.details.category_name);

                    item.sub_categories.forEach(function (item_sub_category: any, key_sub_category: any) {
                        // current_category_obj = {
                        //     category_name:item.details.category_name,
                        //     sub_category_name:item_sub_category.sub_category_name,
                        //     sub_category_id:item_sub_category.sub_category_id
                        // };
                        var subCategory = new SubCategory();

                        subCategory.setId(parseInt(item_sub_category.sub_category_id));
                        subCategory.setName(item_sub_category.sub_category_name);
                        subCategory.setSingularName(item_sub_category.singular_name);
                        subCategory.setStatus(item_sub_category.status);
                        subCategory.setUrl(item_sub_category.complete_details.url);
                        subCategory.setDescription(item_sub_category.complete_details.description);
                        subCategory.setTitle(item_sub_category.complete_details.title);
                        subCategory.setKeywords(item_sub_category.complete_details.keywords);
                        if(item_sub_category.complete_details.meta_description !== null){
                            subCategory.setMetaDescription(item_sub_category.complete_details.meta_description);
                        } else{
                            subCategory.setMetaDescription("");
                        }

                        subCategory.setPageHeader(item_sub_category.complete_details.page_header);
                        subCategory.setPageDescription(item_sub_category.complete_details.page_description);
                        subCategory.setAslH1(item_sub_category.complete_details.asl_h1);
                        subCategory.setAslH2(item_sub_category.complete_details.asl_h2);


                        subCategory.setCategory(category);

                        previous_category.getSubCategories().push(subCategory);

                        subCategory.setPreviousCategory(previous_category);


                        //subCategory.setPreviousCategory(angular.copy(category));

                        category.getSubCategories().push(subCategory);

                        $scope.subCategoriesList.push(subCategory);


                    });


                    newArray.push(category);

                });



                $scope.categoriesList = newArray;


                localStorage.setItem("filter_defaults_categories_sorted", JSON.stringify(response.result.categories));

                //console.log($scope.categoriesList);

            }).error(function (response: any, status: any) {

            });


        } else {

            $state.go('admin.login', {});
        }
    }).error(function (response: any, status: any) {

    });


    /**
     * Upload CSV
     */
    var accept = ".csv";

    let addedDropzone = null;

    // $scope.config_dropzone_csv_upload = {
    //     //url: BASE_SLIM_URL+"/candidates/upload-image/",
    //     url:"/",
    //     maxFilesize: 5,
    //     paramName: "uploadCsv",
    //     maxThumbnailFilesize: 5,
    //     method:"post",
    //     maxFiles: 1,
    //     acceptedFiles: accept,
    //     autoProcessQueue: false,
    //     uploadMultiple:false,
    //     addRemoveLinks: true,
    //     removedfile: function(file:any) {
    //         /*
    //          let _ref:any;
    //          return (_ref = file.previewElement) != null ? _ref.parentNode.removeChild(file.previewElement) : void 0;
    //          */
    //
    //     },
    //     addedfile: function(file:any){
    //
    //         $scope.$apply(function(){
    //             var regex = new RegExp("(.*?)\.(csv)$");
    //             if(!(regex.test(file.name))){
    //                 alert('Please select correct file format! csv');
    //             }else{
    //
    //                 $scope.current_resume.voice_to_upload = file;
    //                 var reader = new FileReader();
    //                 reader.readAsDataURL(file);
    //                 reader.onloadend = function(){
    //                     let onLoadMe = this;
    //                     $scope.$apply(function(){
    //                         $scope.current_source_voice = $sce.trustAsResourceUrl(onLoadMe.result);
    //                     });
    //                     //$('#image_preview').attr('src',this.result);
    //
    //                 }
    //
    //
    //             }
    //
    //
    //
    //
    //
    //         });
    //     },
    //     error: function(file:any, errorMessage:any){
    //         console.log(errorMessage);
    //     },
    //     init: function() {
    //         var scope = $scope;
    //
    //         addedDropzone = this;
    //         //scope.files.push({file: 'added'});
    //         this.on('success', function(file:any, json:any) {
    //
    //
    //         });
    //         this.on('addedfile', function(file:any) {
    //
    //
    //
    //             /*
    //              addedDropzoneImage = this;
    //              scope.$apply(function(){
    //
    //              scope.files.push({file: 'added'});
    //              });
    //              */
    //
    //
    //         });
    //         this.on('removedfile', function(file:any) {
    //             //$scope.current_resume.voice_to_upload = null;
    //         });
    //         this.on('sending',function(file:any, xhr:any, formData:any){
    //             /*
    //              formData.append("candidate", JSON.stringify($scope.save_candidate.toJSON()));
    //              */
    //         });
    //
    //     }
    // };


}

rs_module.controller('CategoriesController', ["$scope", "$sce", "$state", "$location", "$http", "$timeout", "$modal", "toaster", CategoriesPageController]);

