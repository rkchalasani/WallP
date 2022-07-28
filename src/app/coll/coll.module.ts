import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CollPageRoutingModule } from './coll-routing.module';

import { CollPage } from './coll.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CollPageRoutingModule
  ],
  declarations: [CollPage]
})
export class CollPageModule {}
