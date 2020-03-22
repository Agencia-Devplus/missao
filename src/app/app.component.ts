import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private angularFireAuth: AngularFireAuth,
    private navCtrl: NavController
  ) {
    this.initializeApp();
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
}
