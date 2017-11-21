(function () {
    angular.module('inspinia', [
        'ui.router',
        'oc.lazyLoad',
        'ui.bootstrap',
        'pascalprecht.translate',
        'ngIdle',
        'ngSanitize'
    ]).filter('startFrom', function () {
        return function (data, start) {
            if (!data || !data.length) {
                return;
            }
            start = +start;
            return data.slice(start);
        };
    });
})();
//# sourceMappingURL=app.js.map