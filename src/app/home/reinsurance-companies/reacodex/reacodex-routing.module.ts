import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReacodexComponent } from './reacodex.component';

const routes: Routes = [{path: '', component: ReacodexComponent},
{path: 'reacoex-roeaseguradoras',loadChildren:() => import ('./reacoex-reaseguradora/reacoex-reaseguradora.module').then (m => m.ReacoexReaseguradoraModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReacodexRoutingModule { }
