const User = require('./User').User

function createUser (req, res){
    let userdb = new User(req);
    console.log(userdb)
    User.insertMany(userdb);
}
function getUsers (req, res){
    console.log("vai toma no olho do cu")
    let list = User.find({houseID: req.params.houseID}.sort({
        name: 1
    }))
    console.log(list)
    res.status(200).send({"ok":"ok"})
}

module.exports = {
    createUser,
    getUsers
} 
