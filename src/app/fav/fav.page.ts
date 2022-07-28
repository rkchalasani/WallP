import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.page.html',
  styleUrls: ['./fav.page.scss'],
})
export class FavPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
go(){
   this.route.navigate(['/home']);
}
}
