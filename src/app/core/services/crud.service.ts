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
}
