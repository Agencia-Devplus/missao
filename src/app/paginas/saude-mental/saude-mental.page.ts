import { Component, OnInit } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions,  } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-saude-mental',
  templateUrl: './saude-mental.page.html',
  styleUrls: ['./saude-mental.page.scss'],
})
export class SaudeMentalPage implements OnInit {

  constructor(private iab: InAppBrowser) { }

  ngOnInit() {
  }
  abrirUrl(url:string){
    
    //setup option
    const options: InAppBrowserOptions = {
      zoom: 'no'
    }
    //abrir a url
    const browser = this.iab.create(url, '_self', options);
    
  }

}
