import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Menssage } from 'src/app/models/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-reacodex',
  templateUrl: './reacodex.component.html',
  styleUrls: ['./reacodex.component.css']
})
export class ReacodexComponent implements OnInit {

  public file: File
  public form: FormGroup
  displayedColumns: string[] = ['corredores', 'pais', 'actualizacion', 'fecha'];
  data: any[] = [];
  dataEdit: any;
  public eventList: any[] = []
  public dataSource: MatTableDataSource<any>
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private myFormBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.initial()
  }
  initial(){
    this.form = this.myFormBuilder.group({
      file: [Menssage.empty, Validators.compose([Validators.required])],
      date: [Menssage.empty, Validators.compose([Validators.required])],
    })
    this.getDta()
  }
  saveData(){
    
  }
  getDta(){
    this.authService.getReacoex().then((res: any)=>{
      console.log('esta es tu respuesta Reacoex', res)
      this.dataSource = new MatTableDataSource(res)
      this.dataSource.paginator = this.paginator;
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // seletecFile(inform: any){
  //   this.file = inform.target.files[0];
  //   if(inform){

  //   }

  // }

}
