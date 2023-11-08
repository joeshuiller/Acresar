import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacultativosEspecialComponent } from './facultativos-especial.component';

const routes: Routes = [{path: '', component: FacultativosEspecialComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacultativosEspecialRoutingModule { }
