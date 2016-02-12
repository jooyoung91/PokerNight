var PokerNightApp = angular.model('PokerNightApp', []);


/* Controller Binding */
PokerNightApp.controller('GameTableController', GameTableController);
PokerNightApp.factory('GameTableModule', function () {
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
})