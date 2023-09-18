import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReacoexReaseguradoraComponent } from './reacoex-reaseguradora.component';

const routes: Routes = [{path: '',  component: ReacoexReaseguradoraComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReacoexReaseguradoraRoutingModule { }
