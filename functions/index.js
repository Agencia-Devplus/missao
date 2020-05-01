const functions = require('firebase-functions');
const admin = require ('firebase-admin');

//inicializa o amdinistrador
admin.initializeApp();

exports.pushes = functions.firestore
    .document('Perguntas/{perguntaUid}/Comentarios/{id}')
    .onCreate((snap, context) => {
        const document = snap.data();
        console.log('document is', document);
        //var registrationToken = context.params.token
        const perguntaUid = context.params.id_pergunta;
        var tokenRef = admin.firestore().collection('Perguntas/').
       //var registrationToken = tokenRef.child('token');
        console.log('token ref',tokenRef);
        var message = {
            data:{
                title: document.usuario,
                body: document.comentario,
                sender: document.id_usuario
            },
            token: registrationToken
        }

        admin.messaging().send(message)
        .then((response) => {
            console.log('Mensagem enviado com sucesso', response)
        }).catch((error) => {
            console.log('Error ao enviar mensagem', error)
        })

        return Promise.resolve(0);


    });
