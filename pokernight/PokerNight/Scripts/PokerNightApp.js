var PokerNightApp = angular.module('PokerNightApp', []);

/* Factories */
PokerNightApp.factory('GameTablesFactory', GameTablesFactory);
PokerNightApp.factory('UsersFactory', UsersFactory);


/* Controller Binding */
PokerNightApp.controller('GameTableController', GameTableController);

PokerNightApp.filter('titleCase', function () {
    var titleCaseFilter = function (input) {
        var words = input.split(' ');
        for(var i= 0; i < words.length; i++)
        {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
        return words.join(' ');
    }
    return titleCaseFilter;
});

