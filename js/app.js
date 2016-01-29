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
            otherwise({
                redirectTo: '/app'
            });
    }]);