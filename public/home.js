homeApp.service('groupRepository', function ($http) {
    this.getAllBrands = function () {
        var url = "http://52.74.171.222/getbrands";
        return $http.get(url);
    };
});

homeApp.controller('homeCtrl', function ($scope, groupRepository) {
    $scope.currentPage=1;
    $scope.pageSize= 3;

    groupRepository.getAllBrands().success(function (groupdata) {
        $scope.groupData = groupdata.Brands;
    });
});