var PokerNightApp = angular.module('PokerNightApp', []);

PokerNightApp.factory('GameTables', function () {
    var tables = {};
    tables.query = function () {
        return [
            {
                tableID: 1,
                description: "All-in",
                StatusID: 0
            },
            {
                tableID: 2,
                description: "Final table",
                StatusID: 0
            },
            {
                tableID: 3,
                description: "Women only",
                StatusID: 0
            },
        ]

    }
    return tables;
});

//PokerNightApp.controller('GameTableController', function ($scope, GameTables) {
//    $scope.items = GameTables.query();
//    $scope.count = function () {
//        return $scope.items.length;

//    }
//});

/* Controller Binding */
//PokerNightApp.controller('GameTableController', GameTableController);
