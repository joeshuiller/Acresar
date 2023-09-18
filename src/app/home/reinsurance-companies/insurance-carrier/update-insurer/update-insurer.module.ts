import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateInsurerRoutingModule } from './update-insurer-routing.module';
import { UpdateInsurerComponent } from './update-insurer.component';


@NgModule({
  declarations: [UpdateInsurerComponent],
  imports: [
    CommonModule,
    UpdateInsurerRoutingModule
  ]
})
export class UpdateInsurerModule { }
