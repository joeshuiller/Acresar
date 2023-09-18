import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateInsurerComponent } from './create-insurer.component';

const routes: Routes = [{path: '', component: CreateInsurerComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateInsurerRoutingModule { }
