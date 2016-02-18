var PokerNightApp = angular.module('PokerNightApp', []);

/* Factories */
PokerNightApp.factory('GameTablesFactory', GameTablesFactory);
PokerNightApp.factory('UsersFactory', UsersFactory);


/* Controller Binding */
PokerNightApp.controller('GameTableController', GameTableController);


/* Filter Binding */
PokerNightApp.filter('titleCase', DisplayFilter);

