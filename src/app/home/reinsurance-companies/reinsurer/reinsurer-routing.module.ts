import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReinsurerComponent } from './reinsurer.component';

const routes: Routes = [{path: '', component: ReinsurerComponent},
  {path: 'register-reinsurer', loadChildren:() => import ('./register-reinsurer/register-reinsurer.module').then(m=> m.RegisterReinsurerModule)}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReinsurerRoutingModule { }
