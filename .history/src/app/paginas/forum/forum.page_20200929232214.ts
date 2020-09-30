import { Component, OnInit } from "@angular/core";
import { CrudService } from "src/app/core/services/crud.service";
import * as firebase from "firebase";
import { AuthService } from "src/app/core/services/auth.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { PopoverController, NavController, Platform } from "@ionic/angular";
import { OverlayService } from "src/app/core/services/overlay.service";

@Component({
  selector: "app-forum",
  templateUrl: "./forum.page.html",
  styleUrls: ["./forum.page.scss"],
})
export class ForumPage {
  //user: firebase.User;
  user: any;
  perguntas: any[];
  id_user_pergunta: any;
  comentarios: any;
  comentarios_post: any;
  comments = [];
  id_que_vem: any;
  array = [];
  essa_maldita_id: any;
  allQuestions: any[];

  constructor(
    private auth: AuthService,
    public router: Router,
    private crudService: CrudService,
    public route: ActivatedRoute,
    private overlay: OverlayService
  ) {
    //this.auth.authState$.subscribe((user) => (this.user = user));
    this.comments = [];
    this.listarPerguntas().then(() => {
      this.crudService.loadUser().subscribe((data) => {
        this.user = data;
      });
    });
  }

  ionViewWillEnter() {}

  inicializarBusca(): void {
    this.perguntas = this.array;
  }

  filtro(evento: { srcElement: { value: any } }) {
    this.inicializarBusca();
    const termo = evento.srcElement.value;
    if (!termo) {
      return;
    }
    this.perguntas = this.perguntas.filter((postagem) => {
      if (postagem.usuario && termo) {
        if (postagem.usuario.toLowerCase().indexOf(termo.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  }

  /* CRUD POSTAGEM */
  async listarPerguntas() {
    let loading = await this.overlay.loading();
    loading.present();

    try {
      this.crudService.read_Perguntas().subscribe((data) => {
        this.perguntas = data.map((e) => {
          return {
            id: e.payload.doc.id,
            isEdit: false,
            pergunta: e.payload.doc.data()["pergunta"],
            categoria: e.payload.doc.data()["categoria"],
            usuario: e.payload.doc.data()["usuario"],
            usuarioFoto: e.payload.doc.data()["usuarioFoto"],
            id_user_pergunta: e.payload.doc.data()["id_usuario"],
            dataPergunta: e.payload.doc.data()["dataPergunta"],
            token: e.payload.doc.data()["token"],
          };
        });
        this.array = this.perguntas;
        this.array.forEach((item) => {
          this.listarComentariosPergunta(item.id);
        });
      });
    } catch (e) {
      this.overlay.alert({
        message: "Erro ao buscar dados: " + e,
      });
    } finally {
      loading.dismiss();
    }
  }

  /* Listar ultimo Comentário */
  listarComentariosPergunta(id: any) {
    this.id_que_vem = id;

    try {
      this.crudService
        .read_ComentariosForum(this.id_que_vem)
        .subscribe((data) => {
          this.comentarios_post = data.map((e) => {
            return {
              id: e.payload.doc.id,
              isEdit: false,
              comentario: e.payload.doc.data()["comentario"],
              usuario: e.payload.doc.data()["usuario"],
              usuarioFoto: e.payload.doc.data()["usuarioFoto"],
              id_user_pergunta: e.payload.doc.data()["id_usuario"],
              id_pergunta: e.payload.doc.data()["id_pergunta"],
            };
          });
          /* O erro tá aqui :( */
          this.comentarios_post.forEach((item: any) => {
            //this.comments.push(item)
          });
        });
    } catch (e) {
      this.overlay.alert({
        message: "Erro: " + e,
      });
    } finally {
    }
  }
}
