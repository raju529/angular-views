var app = angular.module("angularViews", ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider.when("/users", {
        url: "/users",
        templateUrl: "templates/usersTemplate.html",
        controller: "FirstController"
    })
        .when("/", {
            url:"/",
            templateUrl: "templates/home.html",
            controller: "HomeController"
        })

        .when("/registration", {
            url:"/",
            templateUrl: "templates/registration.html",
            controller: "RegisterController"
        })

        .when("/user/:userId", {
            url: "/user/:userId",
            templateUrl: "templates/user.html"
        });
});