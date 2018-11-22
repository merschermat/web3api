const User = require('./User').User

function createUser(username, email, date) {
    let userdb = new User({
        "username": username,
        "email": email,
        "created": date,
        "removed": false
    });
    User.insertMany(userdb);
}

function getUsers(user) {
    return User.find({
        username: user
    })
}

function getOne(user) {
    return User.findOne({
        username: user
    })
}

function updateUser(user) {
    User.updateOne({
        username: user.username
    }, {
        $set: {
            "email": email,
            "created": user.date
        }
    })
}
function deleteUser (user){
    User.deleteOne({
        "username" : user.username
    })
}
module.exports = {
    createUser,
    getUsers,
    getOne,
    updateUser,
    deleteUser
}