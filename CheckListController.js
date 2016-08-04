(function () {
    var app = angular.module("checkList", []);
    app.controller('CheckListController', function ($scope) {
        $scope.items = [
            {title: 'The list of the product'}

        ];

        $scope.addItem = function () {
            console.log('dodaj itema kurdeee');
            console.log('title nowego itema', $scope.text);
            $scope.items.push({title: $scope.text});
        };
        // $scope.hideItem = function(){
        //     $scope.
        // }
    });
})();