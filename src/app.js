const bodyParser = require('body-parser')
const express = require('express')
const app = express();
const port = 8080;
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const User = require('./Schemas/User/UserController')
const data = require('./BD/connection');

data.connectionOpen();

app.get('/', (req, res) =>{})
app.post('/create/user', (req,res) =>{
    User.createUser(req.body, res)
    res.send('u got it')
} )
app.get('/search/user/:houseID', (req,res) =>{
    User.getUsers(req, res)
} )
app.post('/', function (req, res) {
    res.send('Got a POST request')
})

app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
})

app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))