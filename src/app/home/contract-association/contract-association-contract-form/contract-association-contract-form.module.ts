import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractAssociationContractFormRoutingModule } from './contract-association-contract-form-routing.module';
import { ContractAssociationContractFormComponent } from './contract-association-contract-form.component';
import { MenuModule } from '../menu/menu.module';
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
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [ContractAssociationContractFormComponent],
  imports: [
    CommonModule,
    ContractAssociationContractFormRoutingModule,
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
    MatFormFieldModule,
    MatInputModule,
    MenuModule
  ]
})
export class ContractAssociationContractFormModule { }
