const bodyParser = require('body-parser')
const express = require('express')
const firebase = require('./BD/firebaseFunctions')
let userToken;
const app = express();
const port = 8080;
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const User = require('./Schemas/User/UserController')
const data = require('./BD/connection');

data.connectionOpen();

app.post('/auth', (req, res) =>{
    email = req.body.params.email;
    password = req.body.params.password;
    firebase.validaLogin(email, password)
    res.redirect("~/admin/");
})
app.post('/create/user', (req,res) =>{
    email = req.body.email;
    password = req.body.password;
    username = req.body.username;
    firebase.validaSignup(email, password, username).then(valid =>{
        res.send(valid)
    })
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

app.listen(port, () => console.log(`Faz requisição aqui ${port} meu mano!`))