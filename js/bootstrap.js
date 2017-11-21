requirejs.config({
    shim: {
        "dropzone": ["jquery/jquery-2.1.1.min"],
        "plugins/jquery-ui/jquery-ui": ["jquery/jquery-2.1.1.min"],
        "bootstrap/bootstrap.min": ["jquery/jquery-2.1.1.min"],
        "plugins/daterangepicker/daterangepicker": ["jquery/jquery-2.1.1.min"],
        "plugins/metisMenu/jquery.metisMenu": ["jquery/jquery-2.1.1.min"],
        "plugins/slimscroll/jquery.slimscroll.min": ["jquery/jquery-2.1.1.min"],
        "inspinia": ["plugins/slimscroll/jquery.slimscroll.min"],
        "angular/angular-sanitize": ["angular/angular.min", "inspinia"],
        "angular/angular.min": ["inspinia"],
        "plugins/oclazyload/dist/ocLazyLoad.min": ["angular/angular.min"],
        "angular-translate/angular-translate.min": ["angular/angular.min"],
        "plugins/daterangepicker/angular-daterangepicker": ["angular/angular.min"],
        //"plugins/peity/jquery.peity.min":["jquery/jquery-2.1.1.min"],
        //"plugins/peity/angular-peity":["angular/angular.min"],
        "plugins/summernote/summernote.min": ["jquery/jquery-2.1.1.min"],
        "plugins/summernote/angular-summernote.min": ["jquery/jquery-2.1.1.min", "angular/angular.min"],
        //
        // "plugins/jsTree/jstree.min": ["jquery/jquery-2.1.1.min", "angular/angular.min"],
        // "plugins/jsTree/ngJsTree.min": ["jquery/jquery-2.1.1.min", "angular/angular.min"],
        "ui-router/angular-ui-router.min": ["angular/angular.min"],
        "bootstrap/ui-bootstrap-tpls-0.12.0.min": ["angular/angular.min"],
        "plugins/angular-idle/angular-idle": ["angular/angular.min"],
        "app": ["angular/angular.min", "angular/angular-sanitize", "plugins/oclazyload/dist/ocLazyLoad.min", "angular-translate/angular-translate.min", "ui-router/angular-ui-router.min", "bootstrap/ui-bootstrap-tpls-0.12.0.min", "plugins/angular-idle/angular-idle"],
        "seo_config": ["app"],
        "directives": ["seo_config"],
        "translations": ["directives"],
        "controllers/seo_controllers": ["translations"],
        "controllers/login": ["controllers/seo_controllers"],
        "controllers/dashboard": ["controllers/seo_controllers"],
        "controllers/categories": ["controllers/seo_controllers"],
        "controllers/skills": ["controllers/seo_controllers"]
    }
});
var dependencies = ["plugins/moment/moment.min", "plugins/daterangepicker/daterangepicker", "plugins/daterangepicker/angular-daterangepicker", "jquery/jquery-2.1.1.min", "plugins/jquery-ui/jquery-ui", "bootstrap/bootstrap.min", "plugins/metisMenu/jquery.metisMenu", "plugins/slimscroll/jquery.slimscroll.min",
    "dropzone", "inspinia", "angular/angular.min", "angular/angular-sanitize",
    "plugins/oclazyload/dist/ocLazyLoad.min",
    //"plugins/peity/jquery.peity.min", "plugins/peity/angular-peity",
    "plugins/summernote/summernote.min",
    "plugins/summernote/angular-summernote.min",
    // "plugins/jsTree/jstree.min", "plugins/jsTree/ngJsTree.min",
    "ui-router/angular-ui-router.min", "bootstrap/ui-bootstrap-tpls-0.12.0.min", "plugins/angular-idle/angular-idle",
    "app", "seo_config", "directives", "translations", "controllers/seo_controllers", "controllers/login", "controllers/dashboard", "controllers/categories", "controllers/skills"];
requirejs(dependencies, function () {
    angular.bootstrap($('html'), ['inspinia']);
});
//# sourceMappingURL=bootstrap.js.map