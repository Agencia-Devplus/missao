const functions = require('firebase-functions');
const admin = require('firebase-admin');

//inicializa o amdinistrador
admin.initializeApp();

exports.pushes = functions.firestore
    .document('Perguntas/{perguntaUid}/Comentarios/{id}')
    .onCreate((snap, context) => {
        const document = snap.data();
        console.log('document is', document);

        /* get token */
        registrationToken = admin.firestore().collection('Perguntas').doc(context.params.perguntaUid).get()
            .then(result => {
                var registrationToken = result.data().token;
                console.log('registrationToken: ', registrationToken);

                const payload = {
                    notification: {
                        title: document.usuario,
                        body: document.comentario,
                        icon: document.usuarioFoto,
                        sender: document.id_usuario
                    }
                };

                admin.messaging().sendToDevice(registrationToken, payload) //enviar notificação
                    .then(function(response) {
                        console.log("Mensagem enviada com sucesso:", response);
                    })
                    .catch(function(error) {
                        console.log("Erro ao enviar a mensagem:", error);
                    });
            });
        return Promise.resolve(0);
    });

exports.pushes = functions.firestore
    .document("Perguntas/{perguntaUid}/Likes/{likeId}")
    .onCreate(async(snapshot, context) => {
        try {
            await admin
                .firestore()
                .collection("Perguntas")
                .doc(context.params.perguntaUid)
                .update({
                    likes: admin.firestore.FieldValue.increment(1),
                });
        } catch (error) {
            console.error(error);
        }
    });

exports.pushes = functions.firestore
    .document("Perguntas/{perguntaUid}/Likes/{likeId}")
    .onDelete(async(snapshot, context) => {
        try {
            await admin
                .firestore()
                .collection("Perguntas")
                .doc(context.params.perguntaUid)
                .update({
                    likes: admin.firestore.FieldValue.increment(-1),
                });
        } catch (error) {
            console.error(error);
        }
    });