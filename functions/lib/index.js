"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
//inicializa o amdinistrador
admin.initializeApp();
exports.notificacao = functions.firestore
    .document('Perguntas/{id}/Comentarios')
    .onCreate((snap, context) => {
    const document = snap.data();
    console.log('document is', document);
});
//# sourceMappingURL=index.js.map