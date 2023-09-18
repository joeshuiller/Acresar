import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateInsurerRoutingModule } from './create-insurer-routing.module';
import { UpdateInsurerComponent } from '../update-insurer/update-insurer.component';
import { CreateInsurerComponent } from './create-insurer.component';


@NgModule({
  declarations: [CreateInsurerComponent],
  imports: [
    CommonModule,
    CreateInsurerRoutingModule
  ]
})
export class CreateInsurerModule { }
