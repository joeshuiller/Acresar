import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterReinsurerComponent } from './register-reinsurer.component';

const routes: Routes = [{path: '', component: RegisterReinsurerComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterReinsurerRoutingModule { }
