var app = angular.module("AppFactory", ["ngRoute"]);
var test;
(function (test) {
    var Config = (function () {
        function Config($routeProvider) {
            $routeProvider.when("/", {
                templateUrl: "home.html",
                controller: "HomeController"
            })
                .otherwise({
                redirectTo: '/list'
            });
        }
        return Config;
    }());
    Config.$inject = ['$routeProvider'];
    app.config(Config);
})(test || (test = {}));
//# sourceMappingURL=app.js.map