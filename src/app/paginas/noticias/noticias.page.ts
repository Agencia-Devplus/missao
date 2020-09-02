import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { CrudService } from 'src/app/core/services/crud.service';
import { OverlayService } from 'src/app/core/services/overlay.service';
import { AddNoticiaPage } from 'src/app/compartilhado/modals/add-noticia/add-noticia.page';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {
  public isAdmin = false;
  noticias: any;
  user: firebase.User;

  constructor(private modalController: ModalController, private db: CrudService,
    private alertController: AlertController, private overlay: OverlayService,
    private auth: AuthService) {
      this.auth.authState$.subscribe(user => (this.user = user));

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        firebase
          .firestore()
          .doc(`/users/${user.uid}`)
          .get()
          .then(userProfileSnapshot => {
            this.isAdmin = userProfileSnapshot.data().isAdmin;
          });
      }
    });
     }

  ngOnInit() {
    this.listarNoticias();
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: AddNoticiaPage
    });
    return await modal.present();
  }

  async confirmDel() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  listarNoticias() {
    this.db.read_Noticias().subscribe(data => {
      this.noticias = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          legenda: e.payload.doc.data()['legenda'],
          imgNoticia: e.payload.doc.data()['imgNoticia'],
          usuario: e.payload.doc.data()['usuario'],
          usuarioFoto: e.payload.doc.data()['usuarioFoto'],
          id_user_pergunta: e.payload.doc.data()['id_usuario'],
        };
      })
      
    });
  }

  async RemoveRecord(rowID) {
    const alert = await this.alertController.create({
      header: 'Deletar Notícia ?',

      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {

            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Deletar',
          handler: () => {
            this.db.delete_Noticia(rowID);
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  EditRecord(record) {
    record.isEdit = true;
    record.editLegenda = record.legenda;
  }

  UpdateRecord(recordRow) {
    let record = {};
    record['legenda'] = recordRow.editLegenda;
    this.db.update_Noticia(recordRow.id, record);
    recordRow.isEdit = false;
  }

}
