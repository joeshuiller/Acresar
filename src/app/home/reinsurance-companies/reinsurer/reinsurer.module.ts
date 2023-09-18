import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReinsurerRoutingModule } from './reinsurer-routing.module';
import { ReinsurerComponent } from './reinsurer.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { RegisterReinsurerComponent } from './register-reinsurer/register-reinsurer.component';


@NgModule({
  declarations: [ReinsurerComponent],
  imports: [
    CommonModule,
    ReinsurerRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatRadioModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
  ]
})
export class ReinsurerModule { }
