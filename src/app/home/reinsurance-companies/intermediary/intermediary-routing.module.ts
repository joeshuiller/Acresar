import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntermediaryComponent } from './intermediary.component';

const routes: Routes = [{path: '', component: IntermediaryComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntermediaryRoutingModule { }
