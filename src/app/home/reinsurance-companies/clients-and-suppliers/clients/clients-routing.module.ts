import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients.component';

const routes: Routes = [{path: '', component: ClientsComponent},{
  path: 'new-client', loadChildren: () => import ('./new-client/new-client.module').then (m => m.NewClientModule)
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
