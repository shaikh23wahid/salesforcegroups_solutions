var homeApp = angular.module("homeApp", ['ngRoute']);

homeApp.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'home.html',
        controller: 'homeCtrl'
    }).when('/group/:id', {
        templateUrl: 'groupdetails.html',
        controller: 'groupCtrl'
    }).otherwise({
        redirectTo: '/'
    });
});

