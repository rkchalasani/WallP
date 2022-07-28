import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acc',
  templateUrl: './acc.page.html',
  styleUrls: ['./acc.page.scss'],
})
export class AccPage implements OnInit {
  static open() {
    throw new Error('Method not implemented.');
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor() { }

  ngOnInit() {
  }

}
