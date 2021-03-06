/**
 * Created by casie on 5/28/15.
 */
console.log("entry.js controller is Loaded");

myApp.controller('EntryController',["$scope", "$http", function($scope, $http) {
    $scope.cat = {};
    $scope.cats = [];

    var fetchCats = function(){
        return $http.get('/cats').then(function(response){
            if(response.status !== 200){
                throw new Error("Failed to fetch cats from API");
            }
            //clears out the entry field
            $scope.cat = {};
            //this is our data now
            $scope.cats = response.data;
            return response.data;
        })
    };

    $scope.add = function(cat){
        return $http.post('/add', cat).then(fetchCats);
    };

    fetchCats();


}]);


