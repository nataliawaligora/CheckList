(function () {
    var app = angular.module("checkList", []);
    app.controller('CheckListController', function ($scope) {
        $scope.chcemGreena = false;
        $scope.items = [
            {title: 'The list of the product', isDone: false}

        ];

        $scope.addItem = function () {
            console.log('dodaj itema kurdeee');
            console.log('title nowego itema', $scope.text);
            $scope.items.push({title: $scope.text});
            $scope.text = '';

        };
        $scope.moveIt = function () {
            // $scope.list.hide();
            console.log('aaa!');
        }
    });
})();