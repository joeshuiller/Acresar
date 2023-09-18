import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateInsurerComponent } from './update-insurer.component';

const routes: Routes = [{path: '', component: UpdateInsurerComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateInsurerRoutingModule { }
