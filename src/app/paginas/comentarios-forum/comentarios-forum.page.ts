import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/core/services/crud.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { PopoverController, NavController, LoadingController } from '@ionic/angular';
import { OverlayService } from 'src/app/core/services/overlay.service';
import { ForumPopoverPage } from '../forum-popover/forum-popover.page';

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
  dataComentario: any;

  constructor(private crudService: CrudService,
    public loadingController: LoadingController,
    public route: ActivatedRoute,
    private auth: AuthService,
    private popoverController: PopoverController,
    private navCtrl: NavController,
    private overlay: OverlayService,
    private router: Router) {
    this.auth.authState$.subscribe(user => (this.user = user));
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.idpergunta = params.get('id')
    })
  }

  async ngOnInit() {
    const loading = await this.overlay.loading();
    loading.present();
    try {
      this.getPergunta();
      this.listarComentariosPergunta();
    } catch (e) {
      this.overlay.toast({
        message: "Erro ao buscar os dados: " + e.message
      })
    } finally {
      loading.dismiss();
    }
  }
  getPergunta() {
    this.crudService.detail_Pergunta(this.idpergunta).subscribe(data => {
      this.pergunta = data.data();
      this.id_user_pergunta = data.get('id');
      //convertendo objeto em array
      this.pergunta = Array.of(this.pergunta);
    })
  }

  async criarComentario() {
    let loading = await this.overlay.loading();
    loading.present();
    try {

      let record = {};
      record['comentario'] = this.comentario;
      record['usuario'] = this.user.displayName;
      //record['usuarioFoto'] = this.user.photoURL;
      record['id_usuario'] = this.user.uid;
      record['id_pergunta'] = this.idpergunta;
      record['dataComentario'] = new Date();
      await this.crudService.create_NovoComentario(this.idpergunta, record).then(resp => {
        this.comentario = "";
        this.overlay.toast({
          message: 'Comentário enviado.'
        })
      })

    } catch (e) {
      this.overlay.alert({
        message: 'Erro: ' + e
      })
    } finally {
      loading.dismiss();
    }

  }


  listarComentariosPergunta() {
    this.crudService.read_ComentariosPergunta(this.idpergunta).subscribe(data => {
      this.comentarios = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          comentario: e.payload.doc.data()['comentario'],
          usuario: e.payload.doc.data()['usuario'],
          usuarioFoto: e.payload.doc.data()['usuarioFoto'],
          id_user_pergunta: e.payload.doc.data()['id_usuario'],
          id_pergunta: e.payload.doc.data()['id_pergunta'],
          dataComentario: e.payload.doc.data()['dataComentario']
        };
      })
    });
  }

  /* Editar e excluir pergunta */

  async RemoveRecord(rowID) {
    await this.overlay.alert({
      message: 'Deseja realmente apagar sua pergunta??',
      buttons: [{
        text: 'Sim',
        handler: () => {
          this.crudService.delete_Pergunta(rowID);
          this.router.navigate(["/inicio/painel/forum"]);
        }
      },
        'Não'
      ]
    })
  }

  EditRecord(record) {
    record.isEdit = true;
    record.editPergunta = record.pergunta;
    record.editCategoria = record.categoria;
  }

  async abrirMenu(ev: Event) {
    const popover = await this.popoverController.create({
      component: ForumPopoverPage,
      componentProps: {
        id_pergunta: this.idpergunta,
        id_user: this.user.uid,
        id_user_pergunta: this.id_user_pergunta
      },
      event: ev
    });
    popover.present();
  }

}
