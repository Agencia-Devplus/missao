import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/core/services/crud.service';

import * as firebase from 'firebase';
import { LoadingController, NavController } from '@ionic/angular';
import { OverlayService } from 'src/app/core/services/overlay.service';
import { FCM } from '@ionic-native/fcm/ngx';

@Component({
  selector: 'app-addpergunta',
  templateUrl: './addpergunta.page.html',
  styleUrls: ['./addpergunta.page.scss'],
})
export class AddperguntaPage {

  user: firebase.User;

  perguntas: any;
  pergunta: string;
  categoria: string;
  dataPergunta: any;
  tokenUserPergunta: any;

  constructor(private auth: AuthService, public navCtrl: NavController,
    private crudService: CrudService, public overlay: OverlayService,
    private fcm: FCM) {
    this.auth.authState$.subscribe(user => (this.user = user));

    this.fcm.getToken().then(token => {
      this.tokenUserPergunta = token;
    });
  }

  async criarPergunta() {
    let loading = await this.overlay.loading();
    loading.present();

    try {
      let record = {};
      record['pergunta'] = this.pergunta;
      record['categoria'] = this.categoria;
      record['usuario'] = this.user.displayName;
      record['usuarioFoto'] = this.user.photoURL;
      record['id_usuario'] = this.user.uid;
      record['dataPergunta'] = new Date();
      record['token'] = this.tokenUserPergunta;
      this.crudService.create_NovaPergunta(record).then(resp => {
        this.navCtrl.back();
      })
    } catch (e) {
      this.overlay.alert({
        message: "Erro ao criar nova pergunda: " + e
      })
    } finally {
      loading.dismiss();
    }
  }
}
