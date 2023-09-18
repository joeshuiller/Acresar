import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-reinsurer',
  templateUrl: './reinsurer.component.html',
  styleUrls: ['./reinsurer.component.css']
})
export class ReinsurerComponent implements OnInit {
  displayedColumns: string[] = ['codigo', 'Reasegurador', 'Calificación', 'Angencia', 'Acción'];
  data: any[] = [];
  dataEdit: any;
  public eventList: any[] = []
  public dataSource: MatTableDataSource<any>
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getDta()
  }

  getDta() {
    this.auth.getReinsurer().then((res: any) => {
      console.log(res)
      this.dataSource = new MatTableDataSource(res)
      this.dataSource.paginator = this.paginator;
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  updateRecors(item: any){
    if (item != ""){
      this.dataEdit = item;
      this.router.navigate(['/home/companias/reinsurer/register-reinsurer'])
    }
  }

}
