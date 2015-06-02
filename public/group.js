homeApp.service('groupRepository', function ($http) {
    this.getAllBrands = function () {
        var url = "http://52.74.171.222/getbrands";
        return $http.get(url);
    };
});

var groupModel = {
    "OldBrandID": "3369",
    "HasretailStores": "0",
    "BrandName": "JB Hi Fi",
    "WikipediaURL": "",
    "OfficialFacebookPage": "",
    "ParentBrand": "",
    "CountOfProductCategories": "0",
    "mainbrandurl": "www.jbhifi.com.au",
    "Types": "",
    "Industry": "",
    "CreatedDate": "19/09/2014",
    "BrandBriefAndNotes": "http://cloud.pureprofile.com/brand-icons/live/jbhifi.jpeg",
    "BrandID": "a0M90000009fETS",
    "BrandImageURL": "http://assets.pureprofile.com/images/brands/jb-hi-fi.jpg",
    "FacebookLikes": "",
    "Global": "0",
    "TwitterHandle": "",
    "BrandAccount": "",
    "LinkedinURL": "",
    "CreatedBy": "Paul Chan",
    "PureprofileBrandDashboard": "",
    "BrandTrackingURL": "",
    "TwitterFollowers": "",
    "Size": "",
    "Country": "United States of America",
    "Description": "Join Pureprofile, Our account holders answer thousands of questions every day in online paid surveys. The answers provided allow us to put people into useful groups, like this one. Groups of people with similar likes, dislikes, opinions and values are then used to target people for future campaigns"
};

homeApp.controller('groupCtrl', function ($scope, groupRepository) {
    $scope.GID= 0;

    groupRepository.getAllBrands().success(function (groupdata) {
        $scope.groupData = groupdata.Brands;
        $scope.GroupData = groupModel;
        $scope.GID =$scope.groupID;
    });
});