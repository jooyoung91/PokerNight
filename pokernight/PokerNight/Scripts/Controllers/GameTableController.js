var GameTableController = function ($scope, GameTables) {
    $scope.items = GameTables.query();
    $scope.count = function () {
        return $scope.items.length;

    }
}

GameTableController.$inject = ['$scope', 'GameTables'];
