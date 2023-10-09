import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-proporcionales',
  templateUrl: './proporcionales.component.html',
  styleUrls: ['./proporcionales.component.css']
})
export class ProporcionalesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['identificacion', 'descripcion', 'fechaInicio', 'fechaTermino'];
  public dataSource: MatTableDataSource<any>
  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.getDta()
  }
  getDta() {
    this.dataSource = new MatTableDataSource(),
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
