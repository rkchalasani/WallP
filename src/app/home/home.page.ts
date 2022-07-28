import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home' ,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slideOpts = {
    initialSlide: 1,
    speed: 800,
    slidesPerView: 1,
  autoplay:true};
  constructor(  private rk:  ModalController) {  }
 // eslint-disable-next-line @typescript-eslint/member-ordering
 async closeModal(){
  await this.rk.dismiss();
}
}

