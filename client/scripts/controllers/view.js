/**
 * Created by casie on 5/28/15.
 */
console.log("view.js controller is Loaded");

myApp.controller('ViewController',["$scope", "$http", function($scope, $http) {
    console.log("woof");

        $scope.message = {};

        $http({
            method: 'GET',
            url: '/view'
        }).then(function successCallback(response) {
            console.log(response.data.message);
            $scope.message = response.data.message;
        }, function errorCallback(response) {
            console.log("you suck");
        });
}]);
