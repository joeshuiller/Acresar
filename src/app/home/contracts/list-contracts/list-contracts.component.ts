import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-list-contracts',
  templateUrl: './list-contracts.component.html',
  styleUrls: ['./list-contracts.component.css']
})
export class ListContractsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['contrato', 'nombre', 'fechaInicio', 'fechaTermino', 'moneda', 'tipoContrato', 'fechaCreacion'];
  data: any[] = [];
  public dataSource: MatTableDataSource<any>
  constructor(
    private authService: AuthService,

  ) { }

  ngOnInit(): void {
    this.getDta()
  }

  getDta() {
    this.authService.getDtaContracts().then(
      res => {
        console.log('esta es tu respuesta', res);
        this.data = res;
        this.dataSource = new MatTableDataSource(res),
        this.dataSource.paginator = this.paginator;
      }
    );
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
