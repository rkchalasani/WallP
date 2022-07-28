import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coll',
  templateUrl: './coll.page.html',
  styleUrls: ['./coll.page.scss'],
})
export class CollPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  slideOpts = {
    initialSlide: 1,
    speed: 800,
    slidesPerView: 1,
  autoplay:true};


}
