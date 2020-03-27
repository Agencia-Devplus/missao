import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.page.html',
  styleUrls: ['./painel.page.scss'],
})
export class PainelPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }

  

}
