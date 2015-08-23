app.controller("RestaurantController", function($scope, $routeParams, $http){

    $http.get("restaurants.json").success(function(result){
        console.log(result);
        $scope.restaurantsList =result;
        $scope.restaurant = _.filter($scope.restaurantsList, function(item){
            console.log(item);
            return item.id === $routeParams.restaurantId;
        })[0];
        console.log($scope.restaurant);
    });

    console.log($routeParams.restaurantId);
});