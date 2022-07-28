import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollPage } from './coll.page';

const routes: Routes = [
  {
    path: '',
    component: CollPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollPageRoutingModule {}
