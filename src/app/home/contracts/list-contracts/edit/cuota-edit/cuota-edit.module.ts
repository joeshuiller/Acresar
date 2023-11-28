import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuotaEditRoutingModule } from './cuota-edit-routing.module';
import { CuotaEditComponent } from './cuota-edit.component';
import { CompanyListRoutingModule } from 'src/app/home/reinsurance-companies/company-list/company-list-routing.module';
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


@NgModule({
  declarations: [CuotaEditComponent],
  imports: [
    CommonModule,
    CuotaEditRoutingModule,
    CompanyListRoutingModule,
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
    MatButtonModule,
  ]
})
export class CuotaEditModule { }
