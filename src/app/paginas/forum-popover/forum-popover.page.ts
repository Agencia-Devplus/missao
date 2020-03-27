import { Component, OnInit } from '@angular/core';
import { NavParams, NavController, PopoverController } from '@ionic/angular';
import { CrudService } from 'src/app/core/services/crud.service';
import { OverlayService } from 'src/app/core/services/overlay.service';

@Component({
  selector: 'app-forum-popover',
  templateUrl: './forum-popover.page.html',
  styleUrls: ['./forum-popover.page.scss'],
})
export class ForumPopoverPage implements OnInit {

  pergunta_id: any;
  id_user: any;
  id_user_pergunta: any;

  constructor(private navParams: NavParams,
    private navCtrl: NavController,
    private popoverController: PopoverController,
    private crudService: CrudService,
    private overlay: OverlayService) { }

  ngOnInit() {
    this.pergunta_id = this.navParams.get('id_pergunta');
    this.id_user = this.navParams.get('id_user');
    this.id_user_pergunta = this.navParams.get('id_user_pergunta');
  }

  fecharPopover() {
    this.popoverController.dismiss();
  }

}
