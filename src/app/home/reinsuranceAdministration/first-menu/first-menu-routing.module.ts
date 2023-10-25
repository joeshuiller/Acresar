import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstMenuComponent } from './first-menu.component';

const routes: Routes = [{path: '', component: FirstMenuComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstMenuRoutingModule { }
