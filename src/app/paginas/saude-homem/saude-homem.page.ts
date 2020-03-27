import { Component, OnInit } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-saude-homem',
  templateUrl: './saude-homem.page.html',
  styleUrls: ['./saude-homem.page.scss'],
})
export class SaudeHomemPage implements OnInit {

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
