import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContracsComponent } from './contracs.component';

const routes: Routes = [{path: '', component: ContracsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContracsRoutingModule { }
