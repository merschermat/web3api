const bodyParser = require('body-parser')
const express = require('express')
const firebase = require('./BD/Actions')
const Control = require('./BD/AccessControl')
const scheme = require('./models')
var cors = require('cors');

let user = "merscher";
const app = express();
const port = 8080;
app.use(bodyParser.json())
app.use(cors())
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
            // user = valid[0];
            console.log(user)
            res.redirect("http://localhost:3000/admin");
        }
            
    })
})
// app.put('/Skills',(req, res) =>{
//     Control.update(scheme.Skills, req.body.data).then(()=>{
//         res.send("valid")
//     })
// })
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
        "username" : user,
        "Idioms" : req.body.idioms,
        "Nivel" : req.body.nivel,
        
  "created" :  Date.now(),
        "removed" : false
    }
    Control.create(scheme.Idiom, info).then(() => {
        res.send("valid")
    })
})
app.put('/Idiom',(req, res) =>{
    Control.update(scheme.Idiom, req.body.data).then(()=>{
        res.send("valid")
    })
})
app.get('/Idiom/', (req, res) => {
    Control.get(scheme.Idiom, user).then(list =>{
        res.send(list);
    })
})
app.put('/Biografia',(req, res) =>{
    Control.update(scheme.Bio, req.body).then(()=>{
        res.send("valid")
    })
})
app.post('/add/Biografia', (req, res) => {
    info = {
        "username" : user,
        "text" : req.body.text,
        "created" :  Date.now(),
        "removed" : false
    }
    Control.create(scheme.Bio, info).then(() => {
        res.send("valid")
    })
})
app.get('/Biografia/', (req, res) => {
    Control.get(scheme.Bio, user).then(list =>{
        res.send(list);
    })
})
app.put('/MinBio',(req, res) =>{
    Control.update(scheme.MinBio, req.body.data).then(()=>{
        res.send("valid")
    })
})
app.post('/add/MinBio', (req, res) => {
    info = {
        "username" : user,
        "text" : req.body.text,
        "created" :  Date.now(),
        "removed" : false
    }
    Control.create(scheme.MinBio, info).then(() => {
        res.send("valid")
    })
})
app.get('/MinBio/', (req, res) => {
    Control.get(scheme.MinBio, user).then(list =>{
        res.send(list);
    })
})
app.put('/Link',(req, res) =>{
    Control.update(scheme.Link, req.body.data).then(()=>{
        res.send("valid")
    })
})
app.post('/add/Link', (req, res) => {
    info = {
        "username" : user,
        "Link" : req.body.text,
        "created" :  Date.now(),
        "removed" : false
    }
    Control.create(scheme.Link, info).then(() => {
        res.send("valid")
    })
})
app.get('/Link/', (req, res) => {
    Control.get(scheme.Link, user).then(list =>{
        res.send(list);
    })
})
app.put('/Skills',(req, res) =>{
    Control.update(scheme.Skills, req.body.data).then(()=>{
        res.send("valid")
    })
})
app.post('/add/Skills', (req, res) => {
    info = {
        "username" : user,
        "skills" : req.body.text,
        "created" :  Date.now(),
        "removed" : false
    }
    Control.create(scheme.Skills, info).then(() => {
        res.send("valid")
    })
})
app.get('/Skills/', (req, res) => {
    Control.get(scheme.Skills, user).then(list =>{
        res.send(list);
    })
})
app.put('/Interest',(req, res) =>{
    Control.update(scheme.Interest, req.body.data).then(()=>{
        res.send("valid")
    })
})
app.post('/add/Interest', (req, res) => {
    info = {
        "username" : user,
        "Interests" : req.body.text,
        "created" :  Date.now(),
        "removed" : false
    }
    Control.create(scheme.Interest, info).then(() => {
        res.send("valid")
    })
})
app.get('/Interest/', (req, res) => {
    Control.get(scheme.Interest, user).then(list =>{
        res.send(list);
    })
})
app.put('/Degree',(req, res) =>{
    Control.update(scheme.Degree, req.body.data).then(()=>{
        res.send("valid")
    })
})
app.post('/add/Degree', (req, res) => {
    info = {
        "username" : user,
        "institutions" : req.body.text,
        "created" :  Date.now(),
        "removed" : false
    }
    Control.create(scheme.Degree, info).then(() => {
        res.send("valid")
    })
})
app.get('/Degree/', (req, res) => {
    Control.get(scheme.Degree, user).then(list =>{
        res.send(list);
    })
})
app.put('/More',(req, res) =>{
    Control.update(scheme.More, req.body.data).then(()=>{
        res.send("valid")
    })
})
app.post('/add/More', (req, res) => {
    info = {
        "username" : user,
        "text" : req.body.text,
        "created" :  Date.now(),
        "removed" : false
    }
    Control.create(scheme.More, info).then(() => {
        res.send("valid")
    })
})
app.get('/More/', (req, res) => {
    Control.get(scheme.More, user).then(list =>{
        res.send(list);
    })
})
app.put('/Portfolio',(req, res) =>{
    Control.update(scheme.Portfolio, req.body.data).then(()=>{
        res.send("valid")
    })
})
app.post('/add/Portfolio', (req, res) => {
    info = {
        "username" : user,
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
app.get('/Portfolio/', (req, res) => {
    Control
    app.put('/Skills',(req, res) =>{
    Control.update(scheme.Skills, req.body.data).then(()=>{
        res.send("valid")
    })
}).get(scheme.Portfolio, user).then(list =>{
        res.send(list);
    })
})
app.post('/add/Work', (req, res) => {
    info = {
        "username" : user,
        "text": req.body.text,
        "created" :  Date.now(),
        "removed" : false
    }
    Control.create(scheme.Work, info).then(() => {
        res.send("valid")
    })
})
app.get('/Work/', (req, res) => {
    Control.get(scheme.Work, user).then(list =>{
        res.send(list);
    })
})
app.put('/Work',(req, res) =>{
    Control.update(scheme.Work, req.body.data).then(()=>{
        res.send("valid")
    })
})
app.post('/add/Photo', (req, res) => {
    info = {
        "username" : user,
        "photo": req.body.photo,
        "created" :  Date.now(),
        "removed" : false
    }
    Control.create(scheme.Photo, info).then(() => {
        res.send("valid")
    })
})
app.get('/Photo/', (req, res) => {
    Control.get(scheme.Photo, user).then(list =>{
        res.send(list);
    })
})
app.put('/Photo',(req, res) =>{
    Control.update(scheme.Photo, req.body.data).then(()=>{
        res.send("valid")
    })
})


app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user')
})

app.listen(port, () => console.log(`Faz requisição aqui ${port} meu mano!`))