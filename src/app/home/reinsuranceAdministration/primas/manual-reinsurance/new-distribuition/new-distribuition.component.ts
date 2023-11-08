import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-new-distribuition',
  templateUrl: './new-distribuition.component.html',
  styleUrls: ['./new-distribuition.component.css']
})
export class NewDistribuitionComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['poliza', 'asegurado', 'noContrato', 'fechaInicio', 'fechaFinal'];
  data: any[] = [];
  public dataSource: MatTableDataSource<any>
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getDta()
  }
  getDta() { 
    console.log('e escucho');
     
    this.authService.getPrima().then((res: any) => {
    console.log('esta es tu respuesta primas ', res);
    this.data = res;
    this.dataSource = new MatTableDataSource(res)
    this.dataSource.paginator = this.paginator;
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
