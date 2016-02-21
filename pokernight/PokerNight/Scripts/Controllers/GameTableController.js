var GameTableController = function ($scope, GameTablesFactory, UsersFactory) {
    $scope.tables = GameTablesFactory.query();
    $scope.count = function () {
        return $scope.items.length;

    };
    $scope.users = UsersFactory.query();
    $scope.tableTitle = "game table list";
    $scope.userTitle = "user list";
}

GameTableController.$inject = ['$scope', 'GameTablesFactory', 'UsersFactory'];
