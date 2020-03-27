import { Component, OnInit } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-saude-crianca',
  templateUrl: './saude-crianca.page.html',
  styleUrls: ['./saude-crianca.page.scss'],
})
export class SaudeCriancaPage implements OnInit {

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
