var GameTablesFactory = function () {
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
};

var UsersFactory = function () {
    var users = {};
    users.query = function () {

        return [
            {
                userID: 1,
                userName: "HyungSuk",
                score: 0
            },
            {
                userID: 2,
                userName: 'Chief91',
                score: 200
            },
            {
                userID: 3,
                userName: 'sonuuzi',
                score: 130
            }
        ]
    }
    return users;

}