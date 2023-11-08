import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimasComponent } from './primas.component';

const routes: Routes = [{path: '', component: PrimasComponent},
  {path: 'new-distribuition', loadChildren: () => import('./manual-reinsurance/new-distribuition/new-distribuition.module').then(m => m.NewDistribuitionModule)},
  {path: 'modify-distribuition', loadChildren: ()=> import('./manual-reinsurance/modify-distribuition/modify-distribuition.module').then(m => m.ModifyDistribuitionModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrimasRoutingModule { }
