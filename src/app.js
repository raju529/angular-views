var app = angular.module("angularViews", ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider.when("/users", {
        url: "/users",
        templateUrl: "templates/usersTemplate.html",
        controller: "FirstController"
    })
        .when("/", {
            url:"/",
            templateUrl: "templates/restaurants.html",//"templates/home.html",
            controller: "RestaurantsController",//"HomeController"
        })
        .when("/restaurant/:restaurantId/ravi", {
            url:"/restaurant/:restaurantId",
            templateUrl: "templates/restaurant.html",//"templates/home.html",
            controller: "RestaurantController",//"HomeController"
        })
        .when("/user/:userId", {
            url: "/user/:userId",
            templateUrl: "templates/user.html"
        })
        .when("/signup", {
            url: "/signup",
            templateUrl: "templates/signup.html",
            controller:"SignupController"

        });
});