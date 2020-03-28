import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  user: firebase.User;

  constructor(private firestore: AngularFirestore, private auth: AuthService) { }

   /* CRUD POSTAGENS */
   create_NovaPergunta(record) {
    return this.firestore.collection('Perguntas').add(record);
  }
 
  read_Perguntas() {
    return this.firestore.collection('Perguntas').snapshotChanges();
  }

  read_PerguntasUsuario(userID) {
    return this.firestore.collection('Perguntas', ref => ref.where('usuario','==', userID)).snapshotChanges();
  }
 
  update_Pergunta(recordID,record){
    this.firestore.doc('Perguntas/' + recordID).update(record);
  }
 
  delete_Pergunta(record_id) {
    this.firestore.doc('Perguntas/' + record_id).delete();
  }
  
  detail_Pergunta(recordID) {
    return this.firestore.collection('Perguntas').doc(recordID).get();
    }
  /* FIM CRUD POSTAGENS */

     /* CRUD POSTAGENS */
     create_NovoComentario(record) {
      return this.firestore.collection('Comentarios').add(record);
    }
   
    read_Comentarios() {
      return this.firestore.collection('Comentarios').snapshotChanges();
    }
  
    read_ComentariosUsuario(userID) {
      return this.firestore.collection('Comentarios', ref => ref.where('usuario','==', userID)).snapshotChanges();
    }
    read_ComentariosPergunta(record_id){
      return this.firestore.collection('Comentarios', ref => ref.where('id_pergunta','==', record_id)).snapshotChanges();

    }
   
    update_Comentario(recordID,record){
      this.firestore.doc('Comentarios/' + recordID).update(record);
    }
   
    delete_Comentario(record_id) {
      this.firestore.doc('Comentarios/' + record_id).delete();
    }
    
    detail_Comentario(recordID) {
      return this.firestore.collection('Comentarios').doc(recordID).get();
      }
    /* FIM CRUD POSTAGENS */
}
