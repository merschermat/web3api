const mongoose = require('mongoose')
const uri = 'mongodb://127.0.0.1:27017'

function connectionOpen() {
    mongoose.connect(uri);
}
function connectionClose(){
    mongoose.connection.close()
}

// db.on('error', console.error.bind(console, 'connection error:'));

// db.once('open', function callback() {

//     // Create seed data
//     let housetest ={
//         name: 'viraCopos',
//         address: 'Rua Carlos Gomes, 763',
//         creation: Date.now(),
//         color: {primary:"blue", secondary:"white"},
//         adminID: 123,
//         removed: false
//     }

//     let viraCopos = new House(housetest);

//     let list = [viraCopos]

//     House.insertMany(list).then(() => {

//         /*
//          * Then we need to update address from repLek to 'travessa, 54'.
//          */

//         return House.updateOne({
//             name: 'repLek'
//         }, {
//             $set: {
//                 address: 'travessa, 54'
//             }
//         })

//     }).then(() => {

//         /*
//          * Finally we run a query which returns all the houses that has and adminID 132 
//          */

//         return House.find({
//             adminID: 123
//         }).sort({
//             name: 1
//         })

//     }).then(docs => {

//         docs.forEach(doc => {
//             console.log(
//                 'A rep ' + doc['name'] + ' de id '+ doc["_id"] + ', fica na ' + doc['address']
//             );
//         });
//     }).then(() => {
//         // Since this is an example, we'll clean up after ourselves.
//         return mongoose.connection.db.collection('houses').drop()

//     }).then(() => {
//         // Only close the connection when your app is terminating
//         return mongoose.connection.close()
//     }).then(() => {
//         console.log("Connection closed")

//     }).catch(err => {

//         // Log any errors that are thrown in the Promise chain
//         console.log(err)

//     })
// });
module.exports = {
    connectionOpen,
    connectionClose
} 