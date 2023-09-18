import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReinsuranceUploadComponent } from './reinsurance-upload.component';

const routes: Routes = [{path: '', component: ReinsuranceUploadComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReinsuranceUploadRoutingModule { }
