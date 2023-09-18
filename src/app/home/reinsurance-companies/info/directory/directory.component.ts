import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  displayedColumns: string[] = ['codigo', 'Nombre', 'Direccion', 'Telefono', 'Pais', 'Acción'];
  data: any[] = [];
  public dataSource: MatTableDataSource<any>
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getDta()
  }
  getDta() {
    this.authService.getDirectorios().then((res: any) => {
      console.log('esta es tu respuesta directorios ', res);
      this.data = res;
      this.dataSource = new MatTableDataSource(res)
      this.dataSource.paginator = this.paginator;


    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  navigate(item: any){
    this.router.navigate([item])
  }

}
