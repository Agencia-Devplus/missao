import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/core/services/crud.service';
import * as firebase from 'firebase';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PopoverController, NavController, Platform } from '@ionic/angular';
import { OverlayService } from 'src/app/core/services/overlay.service';


@Component({
  selector: 'app-forum',
  templateUrl: './forum.page.html',
  styleUrls: ['./forum.page.scss'],
})
export class ForumPage {

  user: firebase.User;
  perguntas: any[];
  id_user_pergunta: any;
  comentarios: any;
  comentarios_post: any;
  comments = [];
  id_que_vem: any;
  array = [];
  essa_maldita_id: any;

  constructor(private auth: AuthService, public router: Router, private navCtrl: NavController,
    private crudService: CrudService, private popoverController: PopoverController, private platform: Platform,
    public route: ActivatedRoute, private overlay: OverlayService) {
    this.auth.authState$.subscribe(user => (this.user = user));

  }

  ionViewWillEnter() {
    this.comments = [];
    this.listarPerguntas();
  }

  /* CRUD POSTAGEM */
  async listarPerguntas() {
    let loading = await this.overlay.loading();
    loading.present();

    try {

      this.crudService.read_Perguntas().subscribe(data => {
        this.perguntas = data.map(e => {
          return {
            id: e.payload.doc.id,
            isEdit: false,
            pergunta: e.payload.doc.data()['pergunta'],
            categoria: e.payload.doc.data()['categoria'],
            usuario: e.payload.doc.data()['usuario'],
            usuarioFoto: e.payload.doc.data()['usuarioFoto'],
            id_user_pergunta: e.payload.doc.data()['id_usuario']
          };
        });
        this.array = this.perguntas;
        this.array.forEach(item => {
          this.listarComentariosPergunta(item.id);
        });
      });
    } catch (e) {
      this.overlay.alert({
        message: 'Erro ao buscar dados: ' + e
      })
    } finally {
      loading.dismiss();
    }
  }

  /* Listar ultimo Comentário */
  listarComentariosPergunta(id: any) {
    this.id_que_vem = id;

    try {
      this.crudService.read_ComentariosForum(this.id_que_vem).subscribe(data => {
        this.comentarios_post = data.map(e => {
          return {
            id: e.payload.doc.id,
            isEdit: false,
            comentario: e.payload.doc.data()['comentario'],
            usuario: e.payload.doc.data()['usuario'],
            usuarioFoto: e.payload.doc.data()['usuarioFoto'],
            id_user_pergunta: e.payload.doc.data()['id_usuario'],
            id_pergunta: e.payload.doc.data()['id_pergunta'],
          };
        })
        /* O erro tá aqui :( */
        this.comentarios_post.forEach((item: any) => {
          //this.comments.push(item)
        })

      });
    } catch (e) {
      this.overlay.alert({
        message: "Erro: " + e
      })
    } finally {

    }

  }
}
