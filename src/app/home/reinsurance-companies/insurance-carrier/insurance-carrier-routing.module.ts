import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsuranceCarrierComponent } from './insurance-carrier.component';

const routes: Routes = [{path:'', component: InsuranceCarrierComponent},
  {path:'update-insurer', loadChildren: ()=> import('./update-insurer/update-insurer.module').then(m=>m.UpdateInsurerModule)},
  {path:'create-insurer', loadChildren: ()=> import('./create-insurer/create-insurer.module').then(m=>m.CreateInsurerModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsuranceCarrierRoutingModule { }
