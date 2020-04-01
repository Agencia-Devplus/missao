import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/core/services/crud.service';
import * as firebase from 'firebase';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PopoverController, NavController, Platform } from '@ionic/angular';
import { ForumPopoverPage } from '../forum-popover/forum-popover.page';
import { OverlayService } from 'src/app/core/services/overlay.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-forum',
  templateUrl: './forum.page.html',
  styleUrls: ['./forum.page.scss'],
})
export class ForumPage implements OnInit {

  user: firebase.User;
  perguntas: any [];
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

    this.listarPerguntas();
  }

  ngOnInit() {
   
  }
  

  /* CRUD POSTAGEM */
  listarPerguntas() {
    console.log("Listar as perguntas")
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

      this.array = this.perguntas;
      this.array.forEach(item => {
        console.log("ID da Pergunta: " + item.id)
        this.listarComentariosPergunta(item.id)
      })



    });
  } 
  /* Listar ultimo Comentário */
  listarComentariosPergunta(id) {
    console.log('Listar Comentários da Pergunta')
    console.log("ID da Pergunta para Pesquisar Comments: " + id);
    this.id_que_vem = id;
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
      


      this.comentarios_post.forEach(item => {
        this.comments.push(item)
      })
      console.log(this.comments)
    });


  }

  listarComentarios() {

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
  }

  /* async RemoveRecord(rowID) {
     await this.overlay.alert({
       message: 'Deseja realmente apagar sua pergunta??',
       buttons: [{
         text: 'Sim',
         handler: async () => {
           this.crudService.delete_Pergunta(rowID);
           this.crudService.delete_ComentariosPergunta(rowID);
           this.navCtrl.pop();
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
   } */

  /* async abrirMenu(ev: Event) {
    const popover = await this.popoverController.create({
      component: ForumPopoverPage,
      componentProps: {
        id_user: this.user.uid,
        id_user_pergunta: this.id_user_pergunta
      },
      event: ev
    });
    popover.present();
  } */
  /* fim crud postagem */




}
