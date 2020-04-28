import { Component, ViewChildren, QueryList } from '@angular/core';

import { Platform, NavController, IonRouterOutlet} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { OverlayService } from './core/services/overlay.service';
import { FCM } from '@ionic-native/fcm/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;
  lastTimeBackPress = 0;
  timePeriodToExit = 2000;

  pushes: any = [];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private angularFireAuth: AngularFireAuth,
    private navCtrl: NavController,
    private router: Router,
    private overlay: OverlayService,
    private fcm: FCM,
  ) {
    this.initializeApp();
    this.backButtonEvent();
    this.notificacaoPush();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.angularFireAuth.auth.onAuthStateChanged(user => {
        if (user) {
          this.navCtrl.navigateRoot('/inicio/painel/home');
          this.splashScreen.hide();
        } else {
          this.navCtrl.navigateRoot('/login');
          this.splashScreen.hide();
        }
      });
      this.statusBar.styleDefault();
    });    
  }

  notificacaoPush(){
    /* Notificação Push */
    this.fcm.getToken().then(token => {
      console.log(token);
    });
    //Receber notificação push
    this.fcm.onNotification().subscribe(data => {
      console.log(data);
      if (data.wasTapped) {
        console.log('Received in background');
       //this.router.navigate([data.landing_page, data.price]);
      } else {
        console.log('Received in foreground');
        //this.router.navigate([data.landing_page, data.price]);
      }
    });
    //atualizar FCM Token
    this.fcm.onTokenRefresh().subscribe(token => {
      console.log(token);
    });
  }

  backButtonEvent() {

    this.platform.backButton.subscribeWithPriority(0, () => {
      console.log('this.router.url', this.router.url);
      if (this.router.url === '/inicio/painel/home') {
        if (new Date().getTime() - this.lastTimeBackPress < this.timePeriodToExit) {
          navigator['app'].exitApp();
        } else {
          this.overlay.toast({
            message: "Pressione novamente para sair do aplicativo."
          })
          this.lastTimeBackPress = new Date().getTime();
        }
      } else if (this.router.url === '/inicio/painel/forum' ||
        this.router.url === '/inicio/painel/perfil') {
        this.navCtrl.navigateBack('/inicio/painel/home')
      } else {
        this.navCtrl.pop();
      }
    });
    /*this.platform.backButton.subscribe(async () => {
      this.routerOutlets.forEach((outlet: IonRouterOutlet) => {
        if (outlet && outlet.canGoBack()) {
          outlet.pop();
        } else if (this.router.url === '/inicio/painel/home') {
          if (new Date().getTime() - this.lastTimeBackPress < this.timePeriodToExit) {
            navigator['app'].exitApp();
          } else {
            this.overlay.toast({
              message: "Pressione novamente para sair do aplicativo."
            })
            this.lastTimeBackPress = new Date().getTime();
          }
        }
      });
    });*/
  }
}
