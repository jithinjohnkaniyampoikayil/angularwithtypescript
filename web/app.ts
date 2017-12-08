var app=angular.module("AppFactory", ["ngRoute"]);
module test {
    class Config {
        constructor($routeProvider: ng.route.IRouteProvider) {
            $routeProvider.when("/", {
                templateUrl: "home.html",
                controller: "HomeController"
            })
                .otherwise({
                    redirectTo: '/list'
                });
        }
    }
    Config.$inject = ['$routeProvider'];
    app.config(Config);
}