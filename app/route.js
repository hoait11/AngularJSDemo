app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        controller: "bookCtrl",
        template : "<book-list></book-list>"
    })
    .when("/about", {
        templateUrl : "components/about/about.html"
    })
    .when("/green", {
        templateUrl : "green.htm"
    })
    .when("/blue", {
        templateUrl : "blue.htm"
    })
    .otherwise({
        template : "<h1>None</h1><p>Nothing has been selected</p>"
    });
});