import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProporcionalesComponent } from './proporcionales.component';

const routes: Routes = [{path: '', component: ProporcionalesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProporcionalesRoutingModule { }
