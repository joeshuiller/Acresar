import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListContractsComponent } from './list-contracts.component';

const routes: Routes = [{path: '', component: ListContractsComponent},
  {path: 'cuota-aparte-edit', loadChildren: ()=> import('./edit/cuota-edit/cuota-edit.module').then(m =>m.CuotaEditModule )}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListContractsRoutingModule { }
