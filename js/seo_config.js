function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, IdleProvider, KeepaliveProvider) {
    IdleProvider.idle(5);
    IdleProvider.timeout(120);
    var DEFAULT_PAGE = jQuery("#DEFAULT_PAGE").val();
    $ocLazyLoadProvider.config({
        debug: false
    });
    $stateProvider
        .state('seo', {
        abstract: true,
        url: "/seo",
        templateUrl: "views/common/content.html",
    })
        .state('admin', {
        abstract: true,
        url: "/admin",
        templateUrl: "views/common/empty_content.html",
    })
        .state('seo.test', {
        url: "/test",
        templateUrl: "views/seo/test.html",
        data: { pageTitle: 'Test Page' },
        resolve: {
            loadPlugin: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: 'datePicker',
                        files: ['css/plugins/datapicker/angular-datapicker.css', 'js/plugins/datapicker/angular-datepicker.js']
                    },
                    {
                        serie: true,
                        files: ['js/plugins/moment/moment.min.js', 'js/plugins/daterangepicker/daterangepicker.js', 'css/plugins/daterangepicker/daterangepicker-bs3.css']
                    },
                    {
                        name: 'daterangepicker',
                        files: ['js/plugins/daterangepicker/angular-daterangepicker.js']
                    },
                    {
                        files: ['css/plugins/iCheck/custom.css', 'js/plugins/iCheck/icheck.min.js']
                    }, {
                        insertBefore: '#loadBefore',
                        name: 'toaster',
                        files: ['js/plugins/toastr/toastr.min.js', 'css/plugins/toastr/toastr.min.css']
                    },
                    {
                        name: 'summernote',
                        files: ['css/plugins/summernote/summernote.css', 'css/plugins/summernote/summernote-bs3.css']
                    },
                    {
                        files: ['css/plugins/dropzone/basic.css', 'css/plugins/dropzone/dropzone.css', 'js/plugins/dropzone/dropzone.js']
                    },
                    {
                        name: 'ui.sortable',
                        files: ['js/plugins/ui-sortable/sortable.js']
                    },
                    {
                        insertBefore: '#loadBefore',
                        name: 'localytics.directives',
                        files: ['css/plugins/chosen/chosen.css', 'js/plugins/chosen/chosen.jquery.js', 'js/plugins/chosen/chosen.js']
                    },
                ]);
            }
        }
    })
        .state('seo.dashboard', {
        url: "/dashboard",
        templateUrl: "views/seo/dashboard.html",
        data: { pageTitle: 'Dashboard' },
        resolve: {
            loadPlugin: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: 'datePicker',
                        files: ['css/plugins/datapicker/angular-datapicker.css', 'js/plugins/datapicker/angular-datepicker.js']
                    },
                    {
                        serie: true,
                        files: ['js/plugins/moment/moment.min.js', 'js/plugins/daterangepicker/daterangepicker.js', 'css/plugins/daterangepicker/daterangepicker-bs3.css']
                    },
                    {
                        name: 'daterangepicker',
                        files: ['js/plugins/daterangepicker/angular-daterangepicker.js']
                    },
                    {
                        files: ['css/plugins/iCheck/custom.css', 'js/plugins/iCheck/icheck.min.js']
                    }, {
                        insertBefore: '#loadBefore',
                        name: 'toaster',
                        files: ['js/plugins/toastr/toastr.min.js', 'css/plugins/toastr/toastr.min.css']
                    },
                    {
                        name: 'summernote',
                        files: ['css/plugins/summernote/summernote.css', 'css/plugins/summernote/summernote-bs3.css']
                    },
                    {
                        files: ['css/plugins/dropzone/basic.css', 'css/plugins/dropzone/dropzone.css', 'js/plugins/dropzone/dropzone.js']
                    },
                    {
                        name: 'ui.sortable',
                        files: ['js/plugins/ui-sortable/sortable.js']
                    },
                    {
                        insertBefore: '#loadBefore',
                        name: 'localytics.directives',
                        files: ['css/plugins/chosen/chosen.css', 'js/plugins/chosen/chosen.jquery.js', 'js/plugins/chosen/chosen.js']
                    },
                ]);
            }
        }
    })
        .state('seo.categories', {
        url: "/categories",
        templateUrl: "views/seo/categories.html",
        data: { pageTitle: 'Categories' },
        resolve: {
            loadPlugin: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: 'datePicker',
                        files: ['css/plugins/datapicker/angular-datapicker.css', 'js/plugins/datapicker/angular-datepicker.js']
                    },
                    {
                        serie: true,
                        files: ['js/plugins/moment/moment.min.js', 'js/plugins/daterangepicker/daterangepicker.js', 'css/plugins/daterangepicker/daterangepicker-bs3.css']
                    },
                    {
                        name: 'daterangepicker',
                        files: ['js/plugins/daterangepicker/angular-daterangepicker.js']
                    },
                    {
                        files: ['css/plugins/iCheck/custom.css', 'js/plugins/iCheck/icheck.min.js']
                    }, {
                        insertBefore: '#loadBefore',
                        name: 'toaster',
                        files: ['js/plugins/toastr/toastr.min.js', 'css/plugins/toastr/toastr.min.css']
                    },
                    {
                        name: 'summernote',
                        files: ['css/plugins/summernote/summernote.css', 'css/plugins/summernote/summernote-bs3.css']
                    },
                    {
                        files: ['css/plugins/dropzone/basic.css', 'css/plugins/dropzone/dropzone.css', 'js/plugins/dropzone/dropzone.js']
                    },
                    {
                        name: 'ui.sortable',
                        files: ['js/plugins/ui-sortable/sortable.js']
                    },
                    {
                        insertBefore: '#loadBefore',
                        name: 'localytics.directives',
                        files: ['css/plugins/chosen/chosen.css', 'js/plugins/chosen/chosen.jquery.js', 'js/plugins/chosen/chosen.js']
                    },
                ]);
            }
        }
    })
        .state('seo.skills', {
        url: "/skills",
        templateUrl: "views/seo/skills.html",
        data: { pageTitle: 'Skills' },
        resolve: {
            loadPlugin: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: 'datePicker',
                        files: ['css/plugins/datapicker/angular-datapicker.css', 'js/plugins/datapicker/angular-datepicker.js']
                    },
                    {
                        serie: true,
                        files: ['js/plugins/moment/moment.min.js', 'js/plugins/daterangepicker/daterangepicker.js', 'css/plugins/daterangepicker/daterangepicker-bs3.css']
                    },
                    {
                        name: 'daterangepicker',
                        files: ['js/plugins/daterangepicker/angular-daterangepicker.js']
                    },
                    {
                        files: ['css/plugins/iCheck/custom.css', 'js/plugins/iCheck/icheck.min.js']
                    }, {
                        insertBefore: '#loadBefore',
                        name: 'toaster',
                        files: ['js/plugins/toastr/toastr.min.js', 'css/plugins/toastr/toastr.min.css']
                    },
                    {
                        name: 'summernote',
                        files: ['css/plugins/summernote/summernote.css', 'css/plugins/summernote/summernote-bs3.css']
                    },
                    {
                        files: ['css/plugins/dropzone/basic.css', 'css/plugins/dropzone/dropzone.css', 'js/plugins/dropzone/dropzone.js']
                    },
                    {
                        name: 'ui.sortable',
                        files: ['js/plugins/ui-sortable/sortable.js']
                    },
                    {
                        insertBefore: '#loadBefore',
                        name: 'localytics.directives',
                        files: ['css/plugins/chosen/chosen.css', 'js/plugins/chosen/chosen.jquery.js', 'js/plugins/chosen/chosen.js']
                    },
                ]);
            }
        }
    })
        .state('admin.login', {
        url: "/login",
        templateUrl: "views/seo/login.html",
        data: { pageTitle: 'Login' },
        resolve: {
            loadPlugin: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: 'datePicker',
                        files: ['css/plugins/datapicker/angular-datapicker.css', 'js/plugins/datapicker/angular-datepicker.js']
                    },
                    {
                        serie: true,
                        files: ['js/plugins/moment/moment.min.js', 'js/plugins/daterangepicker/daterangepicker.js', 'css/plugins/daterangepicker/daterangepicker-bs3.css']
                    },
                    {
                        name: 'daterangepicker',
                        files: ['js/plugins/daterangepicker/angular-daterangepicker.js']
                    },
                    {
                        files: ['css/plugins/iCheck/custom.css', 'js/plugins/iCheck/icheck.min.js']
                    }, {
                        insertBefore: '#loadBefore',
                        name: 'toaster',
                        files: ['js/plugins/toastr/toastr.min.js', 'css/plugins/toastr/toastr.min.css']
                    },
                    {
                        name: 'summernote',
                        files: ['css/plugins/summernote/summernote.css', 'css/plugins/summernote/summernote-bs3.css']
                    },
                    {
                        files: ['css/plugins/dropzone/basic.css', 'css/plugins/dropzone/dropzone.css', 'js/plugins/dropzone/dropzone.js']
                    },
                    {
                        name: 'ui.sortable',
                        files: ['js/plugins/ui-sortable/sortable.js']
                    },
                    {
                        insertBefore: '#loadBefore',
                        name: 'localytics.directives',
                        files: ['css/plugins/chosen/chosen.css', 'js/plugins/chosen/chosen.jquery.js', 'js/plugins/chosen/chosen.js']
                    },
                ]);
            }
        }
    })
        .state('recruiter.recruitment_sheet', {
        url: "/recruitment_sheet",
        templateUrl: "views/recruiter/recruitment_sheet.html",
        data: { pageTitle: 'Recruitment Sheet' },
        resolve: {
            loadPlugin: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: 'datePicker',
                        files: ['css/plugins/datapicker/angular-datapicker.css', 'js/plugins/datapicker/angular-datepicker.js']
                    },
                    {
                        serie: true,
                        files: ['js/plugins/moment/moment.min.js', 'js/plugins/daterangepicker/daterangepicker.js', 'css/plugins/daterangepicker/daterangepicker-bs3.css']
                    },
                    {
                        name: 'daterangepicker',
                        files: ['js/plugins/daterangepicker/angular-daterangepicker.js']
                    },
                    {
                        files: ['css/plugins/iCheck/custom.css', 'js/plugins/iCheck/icheck.min.js']
                    }, {
                        insertBefore: '#loadBefore',
                        name: 'toaster',
                        files: ['js/plugins/toastr/toastr.min.js', 'css/plugins/toastr/toastr.min.css']
                    },
                    {
                        name: 'summernote',
                        files: ['css/plugins/summernote/summernote.css', 'css/plugins/summernote/summernote-bs3.css', 'js/plugins/summernote/summernote.min.js', 'js/plugins/summernote/angular-summernote.min.js']
                    },
                    {
                        files: ['css/plugins/dropzone/basic.css', 'css/plugins/dropzone/dropzone.css', 'js/plugins/dropzone/dropzone.js']
                    },
                    {
                        insertBefore: '#loadBefore',
                        name: 'localytics.directives',
                        files: ['css/plugins/chosen/chosen.css', 'js/plugins/chosen/chosen.jquery.js', 'js/plugins/chosen/chosen.js']
                    },
                ]);
            }
        }
    })
        .state('recruiter.recruitment_sheet_details', {
        url: "/recruitment_sheet_details",
        templateUrl: "views/recruiter/recruitment_sheet_details.html",
        data: { pageTitle: 'Recruitment Sheet' },
        resolve: {
            loadPlugin: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: 'datePicker',
                        files: ['css/plugins/datapicker/angular-datapicker.css', 'js/plugins/datapicker/angular-datepicker.js']
                    },
                    {
                        serie: true,
                        files: ['js/plugins/moment/moment.min.js', 'js/plugins/daterangepicker/daterangepicker.js', 'css/plugins/daterangepicker/daterangepicker-bs3.css']
                    },
                    {
                        name: 'daterangepicker',
                        files: ['js/plugins/daterangepicker/angular-daterangepicker.js']
                    },
                    {
                        files: ['css/plugins/iCheck/custom.css', 'js/plugins/iCheck/icheck.min.js']
                    }, {
                        insertBefore: '#loadBefore',
                        name: 'toaster',
                        files: ['js/plugins/toastr/toastr.min.js', 'css/plugins/toastr/toastr.min.css']
                    },
                    {
                        files: ['css/plugins/dropzone/basic.css', 'css/plugins/dropzone/dropzone.css', 'js/plugins/dropzone/dropzone.js']
                    },
                    {
                        insertBefore: '#loadBefore',
                        name: 'localytics.directives',
                        files: ['css/plugins/chosen/chosen.css', 'js/plugins/chosen/chosen.jquery.js', 'js/plugins/chosen/chosen.js']
                    },
                ]);
            }
        }
    });
}
angular
    .module('inspinia')
    .config(config)
    .run(function ($rootScope, $state) {
    $rootScope.$state = $state;
});
//# sourceMappingURL=seo_config.js.map