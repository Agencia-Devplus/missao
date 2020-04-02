import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { Platform } from '@ionic/angular';
import { AngularFireStorage } from '@angular/fire/storage';
import { OverlayService } from 'src/app/core/services/overlay.service';
import * as firebase from 'firebase/app';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Crop } from '@ionic-native/crop/ngx';
import { CrudService } from 'src/app/core/services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  user: firebase.User;
  downloadURL: Observable<string>;
  urlCroppedIMG: string;
  urlIMG: string;
  perguntas: any;
  upload: number;

  configs = {
    isSignIn: true,
    acao: 'Entrar',
    mudarAcao: 'Criar Conta'
  };
  constructor(
    private auth: AuthService,
    private camera: Camera,
    private platform: Platform,
    private file: File,
    private storage: AngularFireStorage,
    private overlay: OverlayService,
    private crop: Crop,
    private crudService: CrudService,
    public router: Router
  ) {
    this.auth.authState$.subscribe(user => (this.user = user));
  }

  ngOnInit() {
    this.listarPerguntasUsuario();
  }

  listarPerguntasUsuario() {
    this.crudService.read_PerguntasUsuario(firebase.auth().currentUser.uid).subscribe(data => {
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
    });
  }
  // Testes upload de imagens
  async abrirGaleria() {
    const opcoes: CameraOptions = {
      quality: 80,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      correctOrientation: true,
      targetHeight: 600,
      targetWidth: 600
    }
    const loading = await this.overlay.loading();
    try {

      /*const fileURI: string =*/ await this.camera.getPicture(opcoes).then((imageData) => {
      this.cropImage(imageData);
    })

      /*
      let file: string;

      if (this.platform.is('ios')) {
        file = fileURI.split('/').pop();
      } else {
        file = fileURI.substring(fileURI.lastIndexOf('/') + 1, fileURI.indexOf('?'));
        this.crop.crop(file, { quality: 70 }).then((caminho) => {
          this.urlCroppedIMG = caminho;
        })
      }

      const path: string = fileURI.substring(0, fileURI.lastIndexOf('/'));
      const buffer: ArrayBuffer = await this.file.readAsArrayBuffer(path, file);
      const blob: Blob = new Blob([buffer], { type: 'image/jpeg' });

      this.uploadPic(blob);
      */


    } catch (e) {
      this.overlay.toast({
        message: 'Erro: ' + e
      })
    } finally {
      loading.dismiss();
    }
  }

  cropImage(fileUrl) {
    this.crop.crop(fileUrl, { quality: 80, targetWidth: 300, targetHeight: 300 })
      .then(
        async newPath => {
          let file: string;

          if (this.platform.is('ios')) {
            file = newPath.split('/').pop();
          } else {
            file = newPath.substring(newPath.lastIndexOf('/') + 1, newPath.indexOf('?'));
            this.crop.crop(file, { quality: 70, targetWidth: 300, targetHeight: 300 }).then((caminho) => {
              this.urlCroppedIMG = caminho;
            })
          }

          const path: string = newPath.substring(0, newPath.lastIndexOf('/'));
          const buffer: ArrayBuffer = await this.file.readAsArrayBuffer(path, file);
          const blob: Blob = new Blob([buffer], { type: 'image/jpeg' });

          this.uploadPic(blob);
        },
        error => {
          this.overlay.toast({
            message: 'Erro cortando a imagem: ' + error
          })
        }
      );
  }

  async uploadPic(blob: Blob) {
    let loading = await this.overlay.loading();
    loading.present();
    try {
      const ref = this.storage.ref(this.user.uid + '/profile/avatar.jpg');
      await ref.put(blob).then(snapshot => {
        this.upload = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      }).then(async () => {
        await ref.getDownloadURL().toPromise().then(url => {
          this.user.updateProfile({
            photoURL: url
          })
          //Alterar no banco
          this.crudService.update_FotoUserComentário(this.user.uid, url);
          this.crudService.update_FotoUserPostagem(this.user.uid, url)
        })
      })
    } catch (e) {
      this.overlay.alert({
        message: "Erro ao enviar a foto: " + e
      })
    } finally {
      loading.dismiss();
    }
  }
}