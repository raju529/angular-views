app.controller("RestaurantsController", function($scope, $http){
    //$http.get("restaurants.json").success(function(result){
    //    console.log(result);
    //    $scope.restaurantsList =result;
    //});
    $http({
        method:"GET",
        url: "restaurants.json",
        contentType: "application/json"
    }).success(function(result){
            console.log(result);
            $scope.restaurantsList =result;
        }).error(function(error){
        console.log(error);
    });
    //$scope.restaurantsList = angular.fromJson(restaurants);
    console.log($scope.restaurantsList);
});