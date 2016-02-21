var GameTablesFactory = function () {
    var tables = {};
    tables.query = function () {
        return [
            {
                tableID: 1,
                description: "All-in",
                statusID: 0,
                buyInMondy: 20,
                availableSpot: 8
            },
            {
                tableID: 2,
                description: "Final table",
                statusID: 0,
                buyInMondy: 15,
                availableSpot: 6
            },
            {
                tableID: 3,
                description: "Women only",
                statusID: 0,
                buyInMondy: 10,
                availableSpot: 4
            },
        ]

    }
    return tables;
};

