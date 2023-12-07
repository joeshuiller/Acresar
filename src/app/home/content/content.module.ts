import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';
import {NgxChartsModule} from '@swimlane/ngx-charts'
import { MenuComponent } from '../reinsurance-companies/menu/menu.component';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    ContentComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    NgxChartsModule,
    MatIconModule
  ]
})
export class ContentModule { }
