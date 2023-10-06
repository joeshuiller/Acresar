import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EspecialesRoutingModule } from './especiales-routing.module';
import { MenuModule } from '../../menu/menu.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EspecialesRoutingModule,
    MenuModule
  ]
})
export class EspecialesModule { }
