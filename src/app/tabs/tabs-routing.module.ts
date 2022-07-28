import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children :[
        {
          path: 'home',
          loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
        },
        {
          path: 'coll',
          loadChildren: () => import('../coll/coll.module').then( m => m.CollPageModule)
        },
        {
          path: 'fav',
          loadChildren: () => import('../fav/fav.module').then( m => m.FavPageModule)
        },
        {
          path: '',
          redirectTo: 'tabs/home',
        pathMatch: 'full'
        }
  ]
},
{
  path: '',
  redirectTo: 'tabs/home',
pathMatch: 'full'
}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
