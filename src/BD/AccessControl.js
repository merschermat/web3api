function create(model, data) {
    let obj = new model(data);
    return model.insertMany(obj)
}

function get(model, username) {
    return model.find({
        username: username
    })
}

function getOne(model,username) {
    return model.findOne({
        username: username
    })
}

function update(model,username) {
    model.updateOne({
        username: username
    }, {
        $set: {

        }
    })
}
function deleteOne(model,username){
    model.deleteOne({
        "username" : username
    })
}
function deleteAll(model, username){
    model.delete({
        "username" : username
    })
}
module.exports = {
    create,
    get,
    getOne,
    update,
    deleteOne,
    deleteAll
}