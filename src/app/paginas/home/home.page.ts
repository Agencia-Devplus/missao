import { Component, OnInit } from '@angular/core';
import { NavController, Platform, IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import {
  InAppBrowser,
  InAppBrowserOptions,
} from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  img: any;

  slideOptions = {
    slidesPerView: 1,
    slidesPerColumn: 1,
    spaceBetween: 10,
    autoplay: true,
  };

  constructor(
    public navCtrl: NavController,
    private socialSharing: SocialSharing,
    public platform: Platform,
    public router: Router,
    private iab: InAppBrowser
  ) {}

  ngOnInit() {}

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }
  /* whatsappShare() {
    this.socialSharing.shareViaWhatsApp("Baixe o aplicativo Missão Saúde.", "www/assets/img/logo-missao-saude.png", "https://play.google.com/store/apps/details?id=com.devplus.missaosaude");
  } */
  abrirUrl(url: string) {
    //setup option
    const options: InAppBrowserOptions = {
      zoom: 'no',
    };
    //abrir a url
    const browser = this.iab.create(url, '_system', options);
  }

  whatsappShare() {
    this.socialSharing.shareViaWhatsApp(
      'Baixe o aplicativo Missão Saúde.',
      'www/assets/img/logo-missao-saude.png',
      'https://play.google.com/store/apps/details?id=com.devplus.missaosaude'
    );
  }
  normalShare() {
    this.socialSharing.share(
      'Baixe o aplicativo Missão Saúde.',
      null,
      'www/assets/images/logo-missao-saude.png',
      'https://play.google.com/store/apps/details?id=com.devplus.missaosaude'
    );
  }
}
