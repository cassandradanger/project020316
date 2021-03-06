var myApp = angular.module('myApp',['ngRoute', 'appControllers', 'ngMaterial', 'ngMessages']);

var appControllers = angular.module('appControllers',[]);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/entry', {
            templateUrl: "/views/routes/entry.html",
            controller: 'EntryController'
        }).
        when('/edit', {
            templateUrl: "/views/routes/edit.html",
            controller: 'EditController'
        }).
        when('/view', {
            templateUrl: "/views/routes/view.html",
            controller: 'ViewController'
        }).
        otherwise({
            redirectTo: '/'
        });
}]);
