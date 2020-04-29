const functions = require('firebase-functions');
const admin = require ('firebase-admin');

//inicializa o amdinistrador
admin.initializeApp();

exports.pushes = functions.firestore
    .document('Perguntas/{token}/Comentarios/{id_pergunta}')
    .onCreate((snap, context) => {
        const document = snap.data();
        console.log('document is', document);

        var userId = context.params.token;
        var message = {
            data:{
                title: document.usuario,
                body: document.comentario,
                sender: document.id_pergunta
            },
            token: userId
        }

        admin.messaging().send(message)
        .then((reponse) => {
            console.log('Mensagem enviado com sucesso', response)
        }).catch((error) => {
            console.log('Error ao enviar mensagem', error)
        })

        return Promise.resolve(0);


    });
