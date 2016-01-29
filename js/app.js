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
            otherwise({
                redirectTo: '/app'
            });
    }
]);