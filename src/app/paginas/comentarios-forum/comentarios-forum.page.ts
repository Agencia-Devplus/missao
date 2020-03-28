import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/core/services/crud.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { PopoverController, NavController, LoadingController } from '@ionic/angular';
import { OverlayService } from 'src/app/core/services/overlay.service';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-comentarios-forum',
  templateUrl: './comentarios-forum.page.html',
  styleUrls: ['./comentarios-forum.page.scss'],
})
export class ComentariosForumPage implements OnInit {

  user: firebase.User;
  idpergunta: string;
  id_user_pergunta: any;
  id_pergunta: any;
  pergunta: any;
  comentario: any;
  comentarios: any;

  constructor(private crudService: CrudService,
    public loadingController: LoadingController,
    public route: ActivatedRoute,
    private auth: AuthService,
    private popoverController: PopoverController,
    private navCtrl: NavController,
    private overlay: OverlayService) { 
      this.auth.authState$.subscribe(user => (this.user = user));
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.idpergunta = params.get('id')
    })
    }

  async ngOnInit() {
    this.listarComentariosPergunta();

    const loading = await this.overlay.loading();
    try {
      this.getPergunta();
    } catch (e) {
      this.overlay.toast({
        message: "Erro ao buscar os dados: " + e.message
      })
    } finally {
      loading.dismiss();
    }
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

  getPergunta() {
    this.crudService.detail_Pergunta(this.idpergunta).subscribe(data => {
      this.pergunta = data.data();
      this.id_user_pergunta = data.get('id');
      //convertendo objeto em array
      this.pergunta = Array.of(this.pergunta);
    })
  }

   criarComentario() {
    let record = {};
    record['comentario'] = this.comentario;
    record['usuario'] = this.user.displayName;
    record['usuarioFoto'] = this.user.photoURL;
    record['id_usuario'] = this.user.uid;
    record['id_pergunta'] = this.idpergunta;
    this.crudService.create_NovoComentario(record).then(resp => {
      this.comentario = "";
      this.user.displayName;
      this.user.photoURL;
      this.idpergunta="";
      this.presentLoading();
    })
      .catch(error => {
        console.log(error);
      });
  }

  /* listarComentarios() {
    this.crudService.read_Comentarios().subscribe(data => {

      this.comentarios = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          comentario: e.payload.doc.data()['comentario'],
          usuario: e.payload.doc.data()['usuario'],
          usuarioFoto: e.payload.doc.data()['usuarioFoto'],
          id_user_pergunta: e.payload.doc.data()['id_usuario'],
          id_pergunta: e.payload.doc.data()['id_pergunta']
        };
      })
      console.log(this.comentarios);

    });
  } */
  listarComentariosPergunta(){

    this.crudService.read_ComentariosPergunta(this.idpergunta).subscribe(data => {

      this.comentarios = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          comentario: e.payload.doc.data()['comentario'],
          usuario: e.payload.doc.data()['usuario'],
          usuarioFoto: e.payload.doc.data()['usuarioFoto'],
          id_user_pergunta: e.payload.doc.data()['id_usuario'],
          id_pergunta: e.payload.doc.data()['id_pergunta']
        };
      })
      console.log(this.comentarios);

    });
  }

}
