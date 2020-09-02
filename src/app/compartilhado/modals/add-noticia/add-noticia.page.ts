import { Component, OnInit, Input } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { OverlayService } from 'src/app/core/services/overlay.service';
import { NavController } from '@ionic/angular';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators'
import { CrudService } from 'src/app/core/services/crud.service';
import * as firebase from 'firebase';
import { AuthService } from 'src/app/core/services/auth.service';
import { FCM } from '@ionic-native/fcm/ngx';

export interface MyData {
  name: string;
  filepath: string;
  size: number;
}

@Component({
  selector: 'app-add-noticia',
  templateUrl: './add-noticia.page.html',
  styleUrls: ['./add-noticia.page.scss'],
})
export class AddNoticiaPage implements OnInit {

  user: firebase.User;
  legenda: string;
  imgNoticia: string;
  tokenUserNoticia: any;

  /* início */
  // Upload Task 
  task: AngularFireUploadTask;

  // Progress in percentage
  percentage: Observable<number>;

  // Snapshot of uploading file
  snapshot: Observable<any>;

  // Uploaded File URL
  UploadedFileURL: Observable<string>;

  //Uploaded Image List
  images: Observable<MyData[]>;

  //File details  
  fileName: string;
  fileSize: number;

  //Status check 
  isUploading: boolean;
  isUploaded: boolean;

  private imageCollection: AngularFirestoreCollection<MyData>;
  /*  fim*/

  constructor(private db: CrudService, private overlay: OverlayService,
    public navCtrl: NavController, private modalController: ModalController,
    private storage: AngularFireStorage, private database: AngularFirestore,
    private auth: AuthService, private fcm: FCM) {
      this.auth.authState$.subscribe(user => (this.user = user));
      /* this.fcm.getToken().then(token => {
        this.tokenUserNoticia = token;
      }); */

    /* início */
    this.isUploading = false;
    this.isUploaded = false;
    //Set collection where our documents/ images info will save
    this.imageCollection = database.collection<MyData>('mideasNoticias');
    console.log(this.imageCollection)
    
    this.images = this.imageCollection.valueChanges();
    /* fim */

  }

  ngOnInit() {
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

  async addNoticia() {
    let loading = await this.overlay.loading();
    loading.present();

    try {
      let record = {};
      record['legenda'] = this.legenda;
      record['imgNoticia'] = this.imgNoticia;
      record['usuario'] = this.user.displayName;
      record['usuarioFoto'] = this.user.photoURL;
      record['id_usuario'] = this.user.uid;
      record['dataNoticia'] = new Date();
      this.db.create_NovaNoticia(record).then(resp => {
        this.closeModal();
      })
    } catch (e) {
      this.overlay.alert({
        message: "Erro ao adicionar novo Noticia: " + e
      })
    } finally {
      loading.dismiss();
    }
  }

  /* Upload Imagem Noticia */
  uploadFile(event: FileList) {


    // The File object
    const file = event.item(0)

    // Validation for Images Only
    /* if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type :( ')
      return;
    } */

    this.isUploading = true;
    this.isUploaded = false;


    this.fileName = file.name;

    // The storage path
    let path = `mideasNoticias/${new Date().getTime()}_${file.name}`;

    // Totally optional metadata
    const customMetadata = { app: 'Freaky Image Upload Demo' };

    //File reference
    const fileRef = this.storage.ref(path);

    // The main task
    this.task = this.storage.upload(path, file, { customMetadata });

    // Get file progress percentage
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges().pipe(

      finalize(() => {
        // Get uploaded file storage path
        this.UploadedFileURL = fileRef.getDownloadURL();

        this.UploadedFileURL.subscribe(resp => {
          this.addImagetoDB({
            name: file.name,
            filepath: resp,
            size: this.fileSize
          });
          this.isUploading = false;
          this.isUploaded = true;
        }, error => {
          console.error(error);
        })
      }),
      tap(snap => {
        this.fileSize = snap.totalBytes;
      })
    )
  }

 async  addImagetoDB(image: MyData) {
    //Create an ID for document
    const id = this.database.createId();

    //Set document id with value in database
    this.imageCollection.doc(this.user.displayName+':' + id).set(image).then(resp => {
      console.log(resp);
    }).catch(error => {
      console.log("error " + error);
    });
}

}
