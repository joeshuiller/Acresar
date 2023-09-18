import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-reacoex-reaseguradora',
  templateUrl: './reacoex-reaseguradora.component.html',
  styleUrls: ['./reacoex-reaseguradora.component.css']
})
export class ReacoexReaseguradoraComponent implements OnInit {
  public file: File
  displayedColumns: string[] = ['corredores', 'pais','calificacion', 'actualizacion', 'fecha'];
  
  data: any[] = [];
  dataEdit: any;
  public eventList: any[] = []
  public dataSource: MatTableDataSource<any>
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.getDta()
  }
  getDta(){
    this.authService.getCorredoresList().then((res: any)=>{
      console.log('esta es tu respuesta Reacoex List', res)
      this.dataSource = new MatTableDataSource(res)
      this.dataSource.paginator = this.paginator;
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
