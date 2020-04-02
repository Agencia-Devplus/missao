import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/core/services/crud.service';

import * as firebase from 'firebase';
import { LoadingController, NavController } from '@ionic/angular';
import { OverlayService } from 'src/app/core/services/overlay.service';

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

  constructor(private auth: AuthService, public navCtrl: NavController,
    private crudService: CrudService, public overlay: OverlayService) {
    this.auth.authState$.subscribe(user => (this.user = user));
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
