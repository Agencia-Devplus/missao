import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormBuilder, FormGroup, FormControl, Validators  } from '@angular/forms';
import { NavController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { OverlayService } from 'src/app/core/services/overlay.service';

@Component({
  selector: 'app-registro-moderador',
  templateUrl: './registro-moderador.page.html',
  styleUrls: ['./registro-moderador.page.scss'],
})
export class RegistroModeradorPage implements OnInit {
  formRegistro: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';
  
  loading: any;

  validation_messages = {
    'email': [
      { type: 'required', message: 'E-mail é obrigatório.' },
      { type: 'pattern', message: 'Entre com um email válido.' }
    ],
    'password': [
      { type: 'required', message: 'Senha requerida.' },
      { type: 'minlength', message: 'A senha deve ter pelo menos 6 caracteres.' }
    ],
    'nome': [
      { type: 'required', message: 'Nome é requerido' }
    ],
    'isAdmin': [
      { type: 'required', message: 'Informe se usuário é administrador.' }
    ]
  };

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private rotaAtiva: ActivatedRoute,
    private navCtrl: NavController, public loadingController: LoadingController,
    public afAuth: AngularFireAuth, public firestore: AngularFirestore, private overlay: OverlayService) { }

  ngOnInit() {
    this.formRegistro = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ])),
      nome: new FormControl('', Validators.compose([
        Validators.required
      ])),
      isAdmin: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
  }

  async carregar() {
    this.loading = await this.loadingController.create({
      message: 'Connecting ...'
    });
  }

  tryRegister(value) {
    this.authService.registerUser(value)
      .then(res => {
        let userId = this.afAuth.auth.currentUser.uid;
        let userDoc = this.firestore.doc<any>('users/' + userId);
        userDoc.set({
          nome: this.formRegistro.value.nome,
          email: this.formRegistro.value.email,
          isAdmin: this.formRegistro.value.isAdmin
        });
        
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
        this.successMessage = "";
      })
      this.overlay.alert({
        message: 'Usuário Cadastrado com Sucesso',
        buttons: [{
          text: 'Ok',
          handler: () => {
            //this.navCtrl.navigateForward(this.rotaAtiva.snapshot.queryParamMap.get('redirect') || '/notificador');
            //this.navCtrl.back();
          }
        }
        ]
      })
  }

}
