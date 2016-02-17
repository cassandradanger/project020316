/**
 * Created by casie on 5/28/15.
 */

myApp.controller('EditController',["$scope", "$http", function($scope, $http) {
    $scope.editEnabled = false;
    $scope.cat = {};
    $scope.cats = [];
    $scope.editCat = {};

    //
    //var fetchCats = function(){
    //    return $http.get('/cats').then(function(response){
    //        if(response.status !== 200){
    //            throw new Error("Failed to fetch cats from API");
    //        }
    //        //clears out the entry field
    //        $scope.cat = {};
    //        //this is our data now
    //        $scope.cats = response.data;
    //        return response.data;
    //    })
    //};


    $scope.remove = function(cat){
        console.log('remove', cat._id);
        $http.delete('/delete/' + cat._id);
        console.log('delete done');
    };

    $scope.edit = function(cat){
        console.log("clicked");
        console.log(cat.firstName);
        console.log(cat.lastName);
        console.log(cat.pizza);
        $scope.editEnabled = true;
        $http.get('/get/' + cat._id).then(function(response){
        $scope.editCat = response.data;
            console.log($scope.editCat);
        });

    };

    $scope.update = function(editCat) {
        console.log('update', editCat);

        $http.put('/put' , editCat).then(function(response){
            console.log("this is the updated data", response.data);
            console.log("update is done");
        });
    };


}]);
