import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';


@Component({
  selector: 'app-funcoes'
})
export class FuncoesComponent implements OnInit {

  constructor(private router: Router, private iab: InAppBrowser) { }

  ngOnInit() {}

  abrirUrl(url: string) {

    //setup option
    const options: InAppBrowserOptions = {
      zoom: 'no'
    }
    //abrir a url
    const browser = this.iab.create(url, '_self', options);

  }

}
