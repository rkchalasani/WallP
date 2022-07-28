import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor( private rk:  ModalController) { }

  ngOnInit() {
  }
  async closeModal(){
    await this.rk.dismiss();
  }


}
