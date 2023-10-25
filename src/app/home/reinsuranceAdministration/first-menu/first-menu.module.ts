import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstMenuRoutingModule } from './first-menu-routing.module';
import { FirstMenuComponent } from './first-menu.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [FirstMenuComponent],
  imports: [
    CommonModule,
    FirstMenuRoutingModule,
    
  ]
})
export class FirstMenuModule { }
