define(["require", "exports", "../models/Url", "../models/Admin"], function (require, exports, Url_1, Admin_1) {
    "use strict";
    function DashboardPageController($scope, $sce, $state, $location, $http, $timeout, $modal, toaster) {
        var API_URL = jQuery("#BASE_API_URL").val();
        var BASE_SLIM_URL = jQuery("#BASE_SLIM_URL").val();
        $scope.isLoggedIn = false;
        $scope.parseUrl = function (link) {
            $http({
                method: 'GET',
                url: BASE_SLIM_URL + "/seo/parse-html",
                params: {
                    url: link
                }
            }).success(function (response) {
                if (response.success) {
                    $scope.selectedItem.setTitle(response.result.title);
                    if (typeof response.result.metas.description !== "undefined") {
                        $scope.selectedItem.setMetaDescription(response.result.metas.description);
                    }
                    if (typeof response.result.metas.keywords !== "undefined") {
                        $scope.selectedItem.setKeywords(response.result.metas.keywords);
                    }
                    if (typeof response.result.H1 !== "undefined") {
                        $scope.selectedItem.setPageH1(response.result.H1);
                    }
                    if (typeof response.result.H2 !== "undefined") {
                        $scope.selectedItem.setPageH2(response.result.H2);
                    }
                    if (typeof response.result.H3 !== "undefined") {
                        $scope.selectedItem.setPageH3(response.result.H3);
                    }
                }
                else {
                    alert(response.exception[0].message);
                }
            }).error(function (response, status) {
                alert(response.exception[0].message);
            });
        };
        /**
         * ALWAYS DO THIS TO ALL
         */
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
            $scope.isLoggedIn = true;
            $scope.urlList = new Array();
            $scope.selectedItem = null;
            $scope.search_urls = "";
            $scope.searchUrlList = new Array();
            $scope.isSearchPanelClosed = false;
            $scope.statusList = [
                "new",
                "posted",
            ];
            $scope.yesNoList = [
                "no",
                "yes",
            ];
            $scope.words_data_meta_description = {
                remaining: 180,
                limit: 180
            };
            $scope.chars_data_title = {
                remaining: 60,
                limit: 60
            };
            /**
             * Search urls
             */
            $scope.searchUrls = function () {
                $scope.searchUrlList = $scope.urlList.filter(function (value) {
                    return (value.getUri().search($scope.search_urls) >= 0);
                });
            };
            $scope.toggleSearch = function () {
                $scope.isSearchPanelClosed = !$scope.isSearchPanelClosed;
            };
            $scope.showSearch = function () {
                return $scope.isSearchPanelClosed;
            };
            /**
             * Fetch all URLS
             */
            $scope.fetchAllUrls = function () {
                $http({
                    method: 'GET',
                    url: BASE_SLIM_URL + "/seo/fetch-sitemap",
                    params: {}
                }).success(function (response) {
                    if (response.success) {
                        $scope.urlList = new Array();
                        response.result.forEach(function (value) {
                            var temp_url = new Url_1.Url();
                            /**
                             * $data = [
                             "id" => $this->getId(),
                             "link" => $this->getLink(),
                             "uri" => $this->getUri(),
                             "title" => $this->getTitle(),
                             "meta_description" => $this->getMetaDescription(),
                             "meta_keywords" => $this->getMetaKeywords(),
                             "page_h1" => $this->getPageH1(),
                             "page_h2" => $this->getPageH2(),
                             "page_h3" => $this->getPageH3(),
                             "redirects_to" => $this->getRedirectsTo(),
                             "status" => $this->getStatus(),
                             "sort_number" => $this->getSortNumber()
                             ];
                             if(!empty($this->getDateCreated())){
                $data["date_created"] = $this->getDateCreated()->format("Y-m-d H:i:s");
            }
    
                             if(!empty($this->getDateUpdated())){
                $data["date_updated"] = $this->getDateUpdated()->format("Y-m-d H:i:s");
            }
    
                             if(!empty($this->getLastUpdatedById())){
                $data["last_updated_by_id"] = $this->getLastUpdatedById();
                $data["last_updated_by_name"] = $this->getLastUpdatedByName();
            }
                             */
                            temp_url.setId(value.id);
                            temp_url.setName(value.link);
                            temp_url.setUri(value.uri);
                            if (value.uri.length <= 0) {
                                temp_url.setUri("homepage");
                            }
                            temp_url.setTitle(value.title);
                            temp_url.setMetaDescription(value.meta_description);
                            temp_url.setKeywords(value.meta_keywords);
                            temp_url.setPageH1(value.page_h1);
                            temp_url.setPageH2(value.page_h2);
                            temp_url.setPageH3(value.page_h3);
                            temp_url.setRedictsTo(value.redirects_to);
                            temp_url.setStatus(value.status);
                            temp_url.setSortNumber(value.sort_number);
                            if (typeof value.save_params != "undefined") {
                                console.log(temp_url);
                                temp_url.setSaveParams(value.save_params);
                            }
                            if (typeof value.date_created != "undefined") {
                                temp_url.setDateCreated(value.date_created);
                            }
                            if (typeof value.date_updated != "undefined") {
                                temp_url.setDateUpdated(value.date_updated);
                            }
                            if (typeof value.last_updated_by_id != "undefined") {
                                temp_url.setLastUpdatedById(value.last_updated_by_id);
                                temp_url.setLastUpdatedByName(value.last_updated_by_name);
                            }
                            if (typeof value.created_by_id != "undefined") {
                                temp_url.setCreatedById(value.created_by_id);
                                temp_url.setCreatedByName(value.created_by_name);
                            }
                            $scope.urlList.push(temp_url);
                        });
                    }
                    else {
                        console.log(response);
                    }
                }).error(function (response, status) {
                    console.log(response.exception[0].message);
                });
            };
            $scope.fetchAllUrls();
            $scope.limitMetaDescription = function () {
                var s = [];
                if (typeof $scope.selectedItem.getMetaDescription() !== "undefined"
                    && $scope.selectedItem.getMetaDescription() != null
                    && $scope.selectedItem.getMetaDescription() != "") {
                    s = $scope.selectedItem.getMetaDescription().trim().split(/\s+/);
                }
                //var s = (<Category>$scope.selectedItem).getMetaDescription() ? (<Category>$scope.selectedItem).getMetaDescription().split(/\s+/) : []; // it splits the text on space/tab/enter
                var current_word_count = 0;
                if (s.length > 0) {
                    current_word_count = s.length;
                }
                $scope.words_data_meta_description.remaining = $scope.words_data_meta_description.limit - current_word_count;
            };
            $scope.limitTitle = function () {
                if (typeof $scope.selectedItem.getTitle() !== "undefined"
                    && $scope.selectedItem.getTitle() !== null) {
                    $scope.chars_data_title.remaining = $scope.chars_data_title.limit - $scope.selectedItem.getTitle().length;
                }
                else {
                    $scope.chars_data_title.remaining = $scope.chars_data_title.limit;
                }
            };
            $scope.selectedItem = null;
            $scope.selectUrl = function (url) {
                $scope.selectedItem = url;
                if (url == null) {
                    $scope.selectedItem = new Url_1.Url();
                    $scope.selectedItem.setStatus("posted");
                }
                $scope.limitTitle();
                $scope.limitMetaDescription();
            };
            $scope.urlIsSelected = function (url) {
                //font-bold-900
                var current_class = "";
                if ($scope.selectedItem !== null) {
                    if (url.getId() == $scope.selectedItem.getId()) {
                        current_class = "font-bold-900";
                    }
                }
                return current_class;
            };
            /**
             * Upload CSV
             */
            var accept = ".csv";
            var addedDropzone_1 = null;
            $scope.config_dropzone_csv_upload = {
                //url: BASE_SLIM_URL+"/candidates/upload-image/",
                url: "/",
                maxFilesize: 1000,
                paramName: "uploadCsv",
                maxThumbnailFilesize: 5,
                method: "post",
                maxFiles: 1,
                acceptedFiles: accept,
                autoProcessQueue: false,
                uploadMultiple: false,
                addRemoveLinks: true,
                removedfile: function (file) {
                    /*
                     let _ref:any;
                     return (_ref = file.previewElement) != null ? _ref.parentNode.removeChild(file.previewElement) : void 0;
                     */
                },
                addedfile: function (file) {
                    $scope.$apply(function () {
                        var regex = new RegExp("(.*?)\.(csv)$");
                        if (!(regex.test(file.name))) {
                        }
                        else {
                            $scope.uploadCsv(file);
                        }
                    });
                },
                error: function (file, errorMessage) {
                    console.log(errorMessage);
                    if (errorMessage == "You can't upload files of this type.") {
                        alert(errorMessage + " Accepted format(s): .csv");
                    }
                },
                init: function () {
                    var scope = $scope;
                    addedDropzone_1 = this;
                    //scope.files.push({file: 'added'});
                    this.on('success', function (file, json) {
                    });
                    this.on('addedfile', function (file) {
                    });
                    this.on('removedfile', function (file) {
                        //$scope.current_resume.voice_to_upload = null;
                    });
                    this.on('sending', function (file, xhr, formData) {
                        /*
                         formData.append("candidate", JSON.stringify($scope.save_candidate.toJSON()));
                         */
                    });
                }
            };
            $scope.uploadCsv = function (csv_to_upload, showMessage) {
                var formData = new FormData();
                formData.append("uploadCsv", csv_to_upload);
                var loggedin_admin = new Admin_1.Admin();
                loggedin_admin.setId(jQuery("#ADMIN_ID").val());
                formData.append("admin", JSON.stringify(loggedin_admin.toJSON()));
                $http({
                    method: 'POST',
                    url: BASE_SLIM_URL + "/seo/upload-csv-sitemap",
                    transformRequest: angular.identity,
                    headers: { 'Content-Type': undefined },
                    data: formData
                }).success(function (response) {
                    if (response.success) {
                        alert("CSV successfully uploaded. Refreshing data.");
                        $scope.fetchAllUrls();
                    }
                    else {
                        if (typeof showMessage !== "undefined") {
                            alert("Csv Upload Failed.");
                        }
                    }
                }).error(function (response, status) {
                    if (typeof showMessage !== "undefined") {
                        alert(response.exception[0].message);
                    }
                });
            };
            $scope.submitUrlForm = function () {
                if ($scope.selectedItem.getId() == null) {
                    if ($scope.urlList.length > 0) {
                        $scope.selectedItem.setSortNumber($scope.urlList[0].getSortNumber() - 1);
                    }
                    else {
                        $scope.selectedItem.setSortNumber(0);
                    }
                }
                var loggedin_admin = new Admin_1.Admin();
                loggedin_admin.setId(jQuery("#ADMIN_ID").val());
                $http({
                    method: 'POST',
                    url: BASE_SLIM_URL + "/seo/update-seo-sitemap",
                    data: {
                        admin: loggedin_admin.toJSON(),
                        site_to_save: $scope.selectedItem.toJSON()
                    }
                }).success(function (response) {
                    if (response.success) {
                        var value = response.result.saved_site;
                        $scope.selectedItem.setName(value.link);
                        $scope.selectedItem.setUri(value.uri);
                        if (value.uri.length <= 0) {
                            $scope.selectedItem.setUri("homepage");
                        }
                        $scope.selectedItem.setTitle(value.title);
                        $scope.selectedItem.setMetaDescription(value.meta_description);
                        $scope.selectedItem.setKeywords(value.meta_keywords);
                        $scope.selectedItem.setPageH1(value.page_h1);
                        $scope.selectedItem.setPageH2(value.page_h2);
                        $scope.selectedItem.setPageH3(value.page_h3);
                        $scope.selectedItem.setRedictsTo(value.redirects_to);
                        $scope.selectedItem.setStatus(value.status);
                        //$scope.selectedItem.setSortNumber(value.sort_number);
                        if (typeof value.date_created != "undefined") {
                            $scope.selectedItem.setDateCreated(value.date_created);
                        }
                        if (typeof value.date_updated != "undefined") {
                            $scope.selectedItem.setDateUpdated(value.date_updated);
                        }
                        if (typeof value.last_updated_by_id != "undefined") {
                            $scope.selectedItem.setLastUpdatedById(value.last_updated_by_id);
                            $scope.selectedItem.setLastUpdatedByName(value.last_updated_by_name);
                        }
                        if (typeof value.created_by_id != "undefined") {
                            $scope.selectedItem.setCreatedById(value.created_by_id);
                            $scope.selectedItem.setCreatedByName(value.created_by_name);
                        }
                        if ($scope.selectedItem.getId() == null) {
                            $scope.selectedItem.setId(value.id);
                            $scope.urlList.unshift($scope.selectedItem);
                            $scope.limitMetaDescription();
                            $scope.limitTitle();
                            console.log($scope.selectedItem);
                            alert("New site successfully added!");
                        }
                        else {
                            alert("Site successfully updated!");
                        }
                    }
                    else {
                    }
                }).error(function (response, status) {
                    alert(response.exception[0].message);
                });
            };
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
        /**
         * ALWAYS DO THIS TO ALL
         */
        // $http({
        //     method: 'POST',
        //     url: "/portal/seo_v2/check_session.php",
        //     params: {}
        // }).success(function (response:any) {
        //
        //     if (response) {
        //         // Has session
        //         $scope.isLoggedIn = true;
        //
        //         $scope.treeData = [
        //             "wapack"
        //         ];
        //
        //
        //     } else {
        //
        //         $state.go('admin.login', {});
        //     }
        // }).error(function (response:any, status:any) {
        //
        // });
    }
    rs_module.controller('DashboardController', ["$scope", "$sce", "$state", "$location", "$http", "$timeout", "$modal", "toaster", DashboardPageController]);
});
//# sourceMappingURL=dashboard.js.map