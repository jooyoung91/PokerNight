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