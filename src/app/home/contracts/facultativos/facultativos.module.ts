import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacultativosRoutingModule } from './facultativos-routing.module';
import { ProporcionalesComponent } from './proporcionales/proporcionales.component';
import { FacultativosComponent } from './facultativos.component';
import { MenuModule } from '../menu/menu.module';


@NgModule({
  declarations: [
    FacultativosComponent
  ],
  imports: [
    CommonModule,
    FacultativosRoutingModule,
    MenuModule
  ]
})
export class FacultativosModule { }
