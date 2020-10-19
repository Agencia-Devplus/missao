import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { AuthService } from "./auth.service";

import * as firebase from "firebase/app";

@Injectable({
  providedIn: "root",
})
export class CrudService {
  user: firebase.User;

  constructor(private firestore: AngularFirestore, private auth: AuthService) {}

  /* CRUD POSTAGENS */
  create_NovaPergunta(record) {
    return this.firestore.collection("Perguntas").add(record);
  }

  read_Perguntas() {
    return this.firestore
      .collection("Perguntas", (ref) => ref.orderBy("dataPergunta", "desc"))
      .snapshotChanges();
  }

  read_PerguntasUsuario(userID) {
    return this.firestore
      .collection("Perguntas", (ref) => ref.where("id_usuario", "==", userID))
      .snapshotChanges();
  }

  update_Pergunta(doc, record) {
    this.firestore.collection("Perguntas").doc(doc).update(record);
  }

  delete_Pergunta(record_id) {
    //this.firestore.doc('Perguntas/' + record_id).delete();
    this.firestore.collection("Perguntas").doc(record_id).delete();
  }

  detail_Pergunta(recordID) {
    return this.firestore.collection("Perguntas").doc(recordID).get();
  }
  /* FIM CRUD POSTAGENS */

  /* CRUD POSTAGENS */
  create_NovoComentario(recordID, record) {
    //return this.firestore.collection('Comentarios').add(record);
    return this.firestore
      .doc("Perguntas/" + recordID)
      .collection("Comentarios")
      .add(record);
  }

  update_FotoUserComentário(userID, novaURL) {
    this.firestore
      .collection("Perguntas")
      .get()
      .toPromise()
      .then((values) => {
        values.forEach((doc) => {
          const coments = this.firestore.collection("Perguntas").doc(doc.id);
          coments
            .collection("Comentarios", (ref) =>
              ref.where("id_usuario", "==", userID)
            )
            .get()
            .toPromise()
            .then((values) => {
              values.forEach((doc) => {
                doc.ref.update({
                  usuarioFoto: novaURL,
                });
              });
            });
        });
      });
  }

  update_FotoUserPostagem(userID, novaURL) {
    this.firestore
      .collection("Perguntas", (ref) => ref.where("id_usuario", "==", userID))
      .get()
      .toPromise()
      .then((values) => {
        values.forEach((doc) => {
          doc.ref.update({
            usuarioFoto: novaURL,
          });
        });
      });
  }

  read_Comentarios() {
    return this.firestore.collection("Comentarios").snapshotChanges();
  }

  read_ComentariosUsuario(userID) {
    return this.firestore
      .collection("Comentarios", (ref) => ref.where("usuario", "==", userID))
      .snapshotChanges();
  }
  read_ComentariosPergunta(record_id) {
    return this.firestore
      .doc("Perguntas/" + record_id)
      .collection("Comentarios", (ref) =>
        ref
          .where("id_pergunta", "==", record_id)
          .orderBy("dataComentario", "desc")
      )
      .snapshotChanges();
  }
  read_ComentariosForum(record_id) {
    return this.firestore
      .doc("Perguntas/" + record_id)
      .collection("Comentarios", (ref) =>
        ref
          .orderBy("dataComentario", "desc")
          .limit(1)
          .where("id_pergunta", "==", record_id)
      )
      .snapshotChanges();
  }
  /* read_ComentariosForum(record_id) {
    return this.firestore.doc('Perguntas/' + record_id).collection('Comentarios', ref => ref.where('id_pergunta', '==', record_id).orderBy('dataComentario', 'desc').limit(1)).snapshotChanges();

  } */
  /* read_ComentariosPergunta(record_id) {
    return this.firestore.collection('Comentarios', ref => ref.where('id_pergunta', '==', record_id)).snapshotChanges();

  } */

  update_Comentario(recordID, record) {
    this.firestore.doc("Comentarios/" + recordID).update(record);
  }

  delete_Comentario(record_id) {
    this.firestore.doc("Comentarios/" + record_id).delete();
  }
  delete_ComentariosPergunta(record_id) {
    this.firestore
      .collection("Perguntas")
      .doc("Comentarios/" + record_id)
      .delete();
  }
  /* FIM CRUD POSTAGENS */

  /* Início CRUD Noticia */

  create_NovaNoticia(record) {
    return this.firestore.collection("noticias").add(record);
  }

  read_Noticias() {
    return this.firestore
      .collection("noticias", (ref) => ref.orderBy("dataNoticia", "desc"))
      .snapshotChanges();
  }

  update_Noticia(recordID, record) {
    this.firestore.doc("noticias/" + recordID).update(record);
  }

  delete_Noticia(record_id) {
    this.firestore.doc("noticias/" + record_id).delete();
    //this.firestore.collection('noticias').doc(record_id).delete();
  }

  filtrarNoticia(filtroCategoria: string) {
    return this.firestore
      .collection("noticias", (ref) => ref.where("tipo", "==", filtroCategoria))
      .valueChanges();
  }

  /* Fim CRUD Noticia */

  /* Carregar Usuário */
  loadUser() {
    const userID = this.auth.loadUser();
    return this.firestore.collection("users").doc(userID).valueChanges();
  }

  async like(postagem: any, userUid: any) {
    const like = {
      criacao: firebase.firestore.FieldValue.serverTimestamp(),
      like: true
    };

    try {
      await this.firestore
        .collection("Postagens")
        .doc(postagem)
        .collection("Likes")
        .doc(userUid)
        .set(like);
    } catch (error) {
      console.log(error);
    }
  }

  async dislike(postagem: any, userUid: any) {
    try {
      await this.firestore
        .collection("Postagens")
        .doc(postagem)
        .collection("Likes")
        .doc(userUid)
        .delete();
    } catch (error) {
      console.error(error);
    }
  }
}
