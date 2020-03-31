import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/core/services/crud.service';

import * as firebase from 'firebase';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-addpergunta',
  templateUrl: './addpergunta.page.html',
  styleUrls: ['./addpergunta.page.scss'],
})
export class AddperguntaPage implements OnInit {

  user: firebase.User;

  perguntas: any;
  pergunta: string;
  categoria: string;
  dataPergunta: any;

  constructor(private auth: AuthService, public router: Router,
    private crudService: CrudService, public loadingController: LoadingController) {
      this.auth.authState$.subscribe(user => (this.user = user));
     }

  ngOnInit() {
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Publicando',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
  }

  criarPergunta() {
    let record = {};
    record['pergunta'] = this.pergunta;
    record['categoria'] = this.categoria;
    record['usuario'] = this.user.displayName;
    record['usuarioFoto'] = this.user.photoURL;
    record['id_usuario'] = this.user.uid;
    record['dataPergunta'] = new Date();
    this.crudService.create_NovaPergunta(record).then(resp => {
      this.pergunta = "";
      this.categoria = "";
      this.dataPergunta;
      this.user.displayName;
      this.user.photoURL;
      this.user.uid;
      this.presentLoading();
      this.router.navigate(['/inicio/painel/forum'])

    })
      .catch(error => {
        console.log(error);
      });
  }

}
