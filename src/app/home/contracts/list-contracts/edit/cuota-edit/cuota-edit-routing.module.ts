import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuotaEditComponent } from './cuota-edit.component';

const routes: Routes = [{path: '',component: CuotaEditComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuotaEditRoutingModule { }
