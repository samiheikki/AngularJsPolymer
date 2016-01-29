var angularPolymerApp = angular.module('angularPolymerApp', [
    'ngRoute',
    'angularPolymerAnimations',
    'angularPolymerControllers'
]);

angularPolymerApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/app', {
                templateUrl: 'app/partials/start.html',
                controller: 'StartCtrl'
            }).
            when('/app/vaadin', {
                templateUrl: 'app/partials/vaadin.html',
                controller: 'VaadinCtrl'
            }).
            when('/app/map', {
                templateUrl: 'app/partials/map.html',
                controller: 'MapCtrl'
            }).
            otherwise({
                redirectTo: '/app'
            });
    }
]);