import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimasComponent } from './primas.component';

const routes: Routes = [{path: '', component: PrimasComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrimasRoutingModule { }
