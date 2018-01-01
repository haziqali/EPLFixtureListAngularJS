myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/index-view.html',
            controller: 'mainController',
            controllerAs: 'mainCtrl'
        })
        .when('/team', {
            templateUrl: 'views/teamwise-view.html',
            controller: 'mainController',
            controllerAs: 'mainCtrl'
        })
        .when('/match/:id', {

            templateUrl: 'views/match-view.html',
            controller: 'matchController',
            controllerAs: 'matchCtrl'
        })

        .otherwise({
            //redirectTo:'/'
            template: '<h1>404 page not found</h1>'
        });
}]);
