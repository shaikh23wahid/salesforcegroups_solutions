/**
 * Created by Wahid on 5/28/2015.
 */
var pythonApp = angular.module("pythonApp", ['ngRoute']);

pythonApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'html/groupdetails.html',
                controller: 'groupdetails'
            })
            otherwise({
                redirectTo: '/'
            });
    } ]);

pythonApp.controller("groupdetails", function($scope) {
    $scope.Name="Wahid Shaikh";
})

pythonApp.factory('userRepository', function ($http) {
    return {
        getAllUsers: function () {
            var url = "https://api.mongolab.com/api/1/databases/angularjs-intro/collections/users?apiKey=terrPcifZzn01_ImGsFOIZ96SwvSXgN9";
            return $http.get(url);
        }
    }
});

pythonApp.service('userService', function ($http) {
    this.getAllUsers1 = function () {
        var url = "https://api.mongolab.com/api/1/databases/angularjs-intro/collections/users?apiKey=terrPcifZzn01_ImGsFOIZ96SwvSXgN9";
        return $http.get(url);
    };
});

pythonApp.factory('Exchange', function ($http) {
    return {
        getConvertsation: function () {
            return $http.get("http://52.74.171.222:1234/getbrands");
        }
    }
});

pythonApp.controller('TradeCtrl', function ($scope, Exchange, userService, userRepository) {

    Exchange.getConvertsation().then(function (result) {
        $scope.conversation = result.convertsation;
    });

    userRepository.getAllUsers().success(function (data) {
        $scope.userRepositoryUsers = data;
    });

    userService.getAllUsers1().success(function (users1) {
        $scope.users1 = users1;
    });
});