const bodyParser = require('body-parser')
const express = require('express')
const firebase = require('./BD/Actions')
const Control = require('./BD/AccessControl')
const scheme = require('./models')
let userToken = null;
const app = express();
const port = 8080;
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
const User = require('./Schemas/User/UserController')
const data = require('./BD/connection');

data.connectionOpen();

app.post('/auth', (req, res) => {
    email = req.body.email;
    password = req.body.password;
    firebase.validaLogin(email, password).then(valid => {
        if (valid.length < 2)
            res.send(valid)
        else{
            userToken = valid[0];
            console.log(userToken)
            res.redirect("http://localhost:3000/admin");
        }
            
    })
})
app.post('/create/user', (req, res) => {
    email = req.body.email;
    password = req.body.password;
    username = req.body.username;
    firebase.validaSignup(email, password, username).then(valid => {
        res.send(valid)
    })
})
app.post('/add/Idiom', (req, res) => {
    info = {
        "username" : req.body.username,
        "Idioms" : req.body.idioms,
        "Nivel" : req.body.nivel,
        "created" :  Date.now(),
        "removed" : false
    }
    Control.create(scheme.Idiom, info).then(() => {
        res.send("valid")
    })
})
app.get('/Idiom/:name', (req, res) => {
    Control.get(scheme.Idiom, req.params.name).then(list =>{
        res.send(list);
    })
})
app.post('/add/Bio', (req, res) => {
    info = {
        "username" : req.body.username,
        "text" : req.body.text,
        "created" :  Date.now(),
        "removed" : false
    }
    Control.create(scheme.Bio, info).then(() => {
        res.send("valid")
    })
})
app.get('/Bio/:name', (req, res) => {
    Control.get(scheme.Bio, req.params.name).then(list =>{
        res.send(list);
    })
})
app.post('/add/MinBio', (req, res) => {
    info = {
        "username" : req.body.username,
        "text" : req.body.text,
        "created" :  Date.now(),
        "removed" : false
    }
    Control.create(scheme.MinBio, info).then(() => {
        res.send("valid")
    })
})
app.get('/MinBio/:name', (req, res) => {
    Control.get(scheme.MinBio, req.params.name).then(list =>{
        res.send(list);
    })
})
app.post('/add/Link', (req, res) => {
    info = {
        "username" : req.body.username,
        "Link" : req.body.text,
        "created" :  Date.now(),
        "removed" : false
    }
    Control.create(scheme.Link, info).then(() => {
        res.send("valid")
    })
})
app.get('/Link/:name', (req, res) => {
    Control.get(scheme.Link, req.params.name).then(list =>{
        res.send(list);
    })
})
app.post('/add/Skills', (req, res) => {
    info = {
        "username" : req.body.username,
        "skills" : req.body.text,
        "created" :  Date.now(),
        "removed" : false
    }
    Control.create(scheme.Skills, info).then(() => {
        res.send("valid")
    })
})
app.get('/Skills/:name', (req, res) => {
    Control.get(scheme.Skills, req.params.name).then(list =>{
        res.send(list);
    })
})
app.post('/add/Interest', (req, res) => {
    info = {
        "username" : req.body.username,
        "Interests" : req.body.text,
        "created" :  Date.now(),
        "removed" : false
    }
    Control.create(scheme.Interest, info).then(() => {
        res.send("valid")
    })
})
app.get('/Interest/:name', (req, res) => {
    Control.get(scheme.Interest, req.params.name).then(list =>{
        res.send(list);
    })
})
app.post('/add/Degree', (req, res) => {
    info = {
        "username" : req.body.username,
        "institutions" : req.body.text,
        "created" :  Date.now(),
        "removed" : false
    }
    Control.create(scheme.Degree, info).then(() => {
        res.send("valid")
    })
})
app.get('/Degree/:name', (req, res) => {
    Control.get(scheme.Degree, req.params.name).then(list =>{
        res.send(list);
    })
})
app.post('/add/More', (req, res) => {
    info = {
        "username" : req.body.username,
        "text" : req.body.text,
        "created" :  Date.now(),
        "removed" : false
    }
    Control.create(scheme.More, info).then(() => {
        res.send("valid")
    })
})
app.get('/More/:name', (req, res) => {
    Control.get(scheme.More, req.params.name).then(list =>{
        res.send(list);
    })
})
app.post('/add/Portfolio', (req, res) => {
    info = {
        "username" : req.body.username,
        "title": req.body.title,
        "date": req.body.date,
        "desc": req.body.desc,
        "created" :  Date.now(),
        "removed" : false
    }
    Control.create(scheme.Portfolio, info).then(() => {
        res.send("valid")
    })
})
app.get('/Portfolio/:name', (req, res) => {
    Control.get(scheme.Portfolio, req.params.name).then(list =>{
        res.send(list);
    })
})
app.post('/add/Work', (req, res) => {
    info = {
        "username" : req.body.username,
        "text": req.body.text,
        "created" :  Date.now(),
        "removed" : false
    }
    Control.create(scheme.Work, info).then(() => {
        res.send("valid")
    })
})
app.get('/Work/:name', (req, res) => {
    Control.get(scheme.Work, req.params.name).then(list =>{
        res.send(list);
    })
})
app.post('/add/Photo', (req, res) => {
    info = {
        "username" : req.body.username,
        "photo": req.body.photo,
        "created" :  Date.now(),
        "removed" : false
    }
    Control.create(scheme.Photo, info).then(() => {
        res.send("valid")
    })
})
app.get('/Photo/:name', (req, res) => {
    Control.get(scheme.Photo, req.params.name).then(list =>{
        res.send(list);
    })
})


app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user')
})

app.listen(port, () => console.log(`Faz requisição aqui ${port} meu mano!`))