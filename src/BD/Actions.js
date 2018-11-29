const firebase = require('firebase');
const User = require('../Schemas/User/UserController')

const config = {
    apiKey: "AIzaSyDxPSiXj0JBBVlvlPtQvZE_dl2-JTf4oqs",
    authDomain: "me-com-web.firebaseapp.com",
    databaseURL: "https://me-com-web.firebaseio.com",
    projectId: "me-com-web",
    storageBucket: "me-com-web.appspot.com",
    messagingSenderId: "459600872780"
};

firebase.initializeApp(config);
const database = firebase.database();

function validaSignup(email, password, username) {
    return firebase.auth().createUserWithEmailAndPassword(email, password).then((data) => {
        User.getUsers(username).then(res => {
            console.log(res)
            if (data == null) {
                User.createUser(username, email, Date.now());
                return "Usuario criado"
            } else
                return PromiseRejectionEvent("Username em uso");
        })
    }).catch(function (error) {
        if (error != null) {
            if (error.code == 'auth/email-already-in-use')
                return "Email já cadastrado";
            else
                return 'something broke :/'
        }
    });

}


function validaLogin(email, senha) {
    return firebase.auth().signInWithEmailAndPassword(email, senha).then(data => {
        return User.getOne({
            "email" : email
        })
    }).catch(function (error) {
        if (error != null) {
            return "Email ou senha invalidos"
        }
    });

}

function logOut() {
    firebase.auth().signOut();
}

function addContato(uid, email, callback, notification) {
    var usu = firebase.auth().currentUser;
    getAllUsuarios((usuarios) => {
        var info = usuarios.map(r => r.informacoes);
        var usuRef = database.ref('usuarios/' + uid + '/contatos');
        var notifi = database.ref('notificacoes');
        var notFound = true;
        if (usuRef) {
            info.forEach(i => {
                var obj = i[Object.keys(i)[0]];
                if (obj.email == email) {
                    notFound = false;
                    usuRef.push({
                        nome: obj.name,
                        uid: obj.id,
                        chavePublica: obj.chavePublica
                    });
                    if (notification) {
                        notifi.push({
                            adicionado: obj.id,
                            adicionando: uid,
                            nomeAdicionando: usu.email
                        });
                        Adicionado();
                    }
                    callback();
                }
            });
        } else {
            console.log('ERRO ao referenciar usuario/informacao no bd add contato')
        }
        if (notFound) {
            swal({
                icon: 'error',
                title: 'Oops!',
                text: 'Parece que este email ainda não foi cadastrado'
            })
        }
    });
}

function getAllUsuarios(callback) {
    var usuarios = database.ref('usuarios');
    var usuInfo = [];
    usuarios.once('value', function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
            usuInfo.push(childSnapshot.val());
        });
        callback(usuInfo);
    });
}

function getAllContatos(callback) {
    firebase.auth().onAuthStateChanged((user) => {
        var contatos = database.ref('usuarios/' + user.uid + '/contatos');
        var usuContato = [];
        contatos.once('value', function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                usuContato.push(childSnapshot.val());
            });
            callback(usuContato);
        });
    })
}

function carregaMensagem(OutroUser, callback) {
    var user = firebase.auth().currentUser;
    var mensagem = database.ref('mensagens/');
    mensagem.off();
    var setMensagem = (data) => {
        const value = data.val();
        if (value.uidEmitente == user.uid && value.uidDestinatario == OutroUser) {
            openpgp.descifraMsg(chavePrivada, value.emtMessage, (plainText) => {
                callback({
                    message: plainText.data,
                    date: '14:00'
                });
            });
        } else if (value.uidEmitente == OutroUser && value.uidDestinatario == user.uid) {
            openpgp.descifraMsg(chavePrivada, value.destMessage, (plainText) => {
                callback({
                    message: plainText.data,
                    date: '14:00',
                    from: OutroUser
                });
            });
        }
    }
    if (user) {
        mensagem.on('child_added', setMensagem); //lê as ultimas 10 mensagens
        mensagem.on('child_changed', setMensagem); //lê as ultimas 10 mensagens
    }
    // mensagem.once( 'value', ( snapshot ) => {
    //     snapshot.forEach( ( childSnapshot ) => {
    //         console.log( childSnapshot.val() );
    //     } )
    // } );
}

function enviarMensagem(destPubKey, emtPubKey, uidDestinatario, content, callback) {
    var user = firebase.auth().currentUser;
    openpgp.cifraMsg(destPubKey, chavePrivada, content, (destCipherText) => {
        openpgp.cifraMsg(emtPubKey, chavePrivada, content, (emtCipherText) => {
            if (user) {
                var mensagem = database.ref('mensagens/');
                mensagem.push({
                    uidEmitente: user.uid,
                    uidDestinatario: uidDestinatario,
                    destMessage: destCipherText.data,
                    emtMessage: emtCipherText.data
                }).then(
                    callback()
                );
            } else {
                console.log('USUARIO NÃO LOGADO')
            }
        });
    });
}

function getCurrentUser() {
    return firebase.auth().currentUser;
}

function setCurrentUserData(callback) {

    getAllUsuarios((users) => {

        const usersInfo = users.map(user => user.informacoes);

        usersInfo.forEach(info => {

            const object = info[Object.keys(info)[0]];

            if (object.email == getCurrentUser().email) {

                callback(object);
            }
        });
    });
}

// Exports
module.exports = {
    validaSignup,
    getAllUsuarios,
    addContato,
    logOut,
    validaLogin,
    validaSignup,
    carregaMensagem,
    enviarMensagem,
    getAllContatos,
    getCurrentUser,
    setCurrentUserData,

}