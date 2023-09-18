import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReinsuranceUploadRoutingModule } from './reinsurance-upload-routing.module';
import { ReinsuranceUploadComponent } from './reinsurance-upload.component';


@NgModule({
  declarations: [ReinsuranceUploadComponent],
  imports: [
    CommonModule,
    ReinsuranceUploadRoutingModule
  ]
})
export class ReinsuranceUploadModule { }
