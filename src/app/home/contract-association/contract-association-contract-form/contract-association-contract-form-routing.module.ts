import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractAssociationContractFormComponent } from './contract-association-contract-form.component';

const routes: Routes = [{path: '', component: ContractAssociationContractFormComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractAssociationContractFormRoutingModule { }
