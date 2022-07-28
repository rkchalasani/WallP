import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { SharedDirectivesDirective } from './directives/shared-directives.directive';
// import { ParallaxHeaderDirective } from './directives/parallax-header.directive';
// import { CollectionsComponent } from './collections/collections.component';
// import { AccountComponent } from './account/account.component';
// import { FavouritesComponent } from './favourites/favourites.component';


@NgModule({
  declarations: [AppComponent

],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
