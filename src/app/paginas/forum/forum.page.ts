import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/core/services/crud.service';
import * as firebase from 'firebase';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { ForumPopoverPage } from '../forum-popover/forum-popover.page';


@Component({
  selector: 'app-forum',
  templateUrl: './forum.page.html',
  styleUrls: ['./forum.page.scss'],
})
export class ForumPage implements OnInit {

  user: firebase.User;
  pergunta: any;
  perguntas: any;
  postagemTexto: string;
  id_user_pergunta: any;
  idpergunta: string;

  constructor(private auth: AuthService, public router: Router,
    private crudService: CrudService, private popoverController: PopoverController,
    public route: ActivatedRoute) {
    this.auth.authState$.subscribe(user => (this.user = user));
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.idpergunta = params.get('id')
    })
   }

  ngOnInit() {
    this.listarPerguntas();
  }

  /* CRUD POSTAGEM */

  listarPerguntas() {
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
      })
      console.log(this.perguntas);

    });
  }
  /* getPergunta() {
    this.crudService.read_Perguntas().subscribe(data => {
      this.pergunta = data.data();
      this.id_user_pergunta = data.get('id');
      //convertendo objeto em array
      this.pergunta = Array.of(this.pergunta);
    })
  } */

  

  RemoveRecord(rowID) {
    this.crudService.delete_Pergunta(rowID);
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
