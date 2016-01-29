var angularPolymerControllers = angular.module('angularPolymerControllers', []);


angularPolymerControllers.controller('StartCtrl', ['$scope', '$routeParams', '$http', '$location',
    function ($scope, $routeParams, $http, $location) {
        console.log($scope);
    }
]);

angularPolymerControllers.controller('VaadinCtrl', ['$scope', '$routeParams', '$http', '$location',
    function ($scope, $routeParams, $http, $location) {
        var getPeople = function (b, d) {
            var c = new XMLHttpRequest();
            c.onreadystatechange = function() {
                if (c.readyState === XMLHttpRequest.DONE && c.status === 200) {
                    d(JSON.parse(c.responseText))
                }
            };
            c.open("GET", b, true);
            c.send()
        };
        var b = document.querySelector("#simple");
        getPeople("https://demo.vaadin.com/demo-data/1.0/people", function(c) {
            b.items = c.result
        });
    }
]);

angularPolymerControllers.controller('MapCtrl', ['$scope', '$routeParams', '$http', '$location',
    function ($scope, $routeParams, $http, $location) {
        console.log($scope);
    }
]);