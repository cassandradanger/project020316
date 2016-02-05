/**
 * Created by casie on 5/28/15.
 */

myApp.controller('EditController',["$scope", "$http", function($scope, $http) {
    console.log("meow");

    $scope.message = {};

    $http({
        method: 'GET',
        url: '/edit'
    }).then(function successCallback(response) {
    console.log(response.data.message);
        $scope.message = response.data.message;
    }, function errorCallback(response) {
        console.log("you suck");
    });

    $scope.remove = function(cat){
        console.log('yup', cat._id);
        $http.delete('/delete/' + cat._id).then(fetchCats);
        console.log('duh');
    };

}]);
