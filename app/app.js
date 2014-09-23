var mozCouchApp = angular.module('MozCouch', [ 'ngRoute' ]);

mozCouchApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        controller: 'IndexController',
        templateUrl: 'views/index.html'
    }).otherwise({ redirectTo: '/' });
}]);