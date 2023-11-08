import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Menssage } from 'src/app/models/router';
import Swal from 'sweetalert2';

interface years {
  value: string;
  viewValue: string;
}

type NewType = years;

@Component({
  selector: 'app-facultativos-especial',
  templateUrl: './facultativos-especial.component.html',
  styleUrls: ['./facultativos-especial.component.css']
})
export class FacultativosEspecialComponent implements OnInit {
  public form: FormGroup;
  public formTwo: FormGroup;
  public entities: any = [];
  public selectedOption: any;
  public createForm: any;

  constructor(
    private myFormBuilder: FormBuilder,
    private myFormBuilderTwo: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initial()
  }
  public dataSource: MatTableDataSource<any>
  public dataSourceTwo: MatTableDataSource<any>
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['codRamo', 'ramos', 'sumaLimite', 'primaReaseguradora', 'cesion'];
  displayedColumnsTwo: string[] = ['contrato', 'tramo', 'sumaRetenida', 'sumaCedida', 'primaRetenida', 'primaCedida'];
  myYears: NewType[] = [
    {value: '2019', viewValue: '2019'},
    {value: '2020', viewValue: '2020'},
    {value: '2021', viewValue: '2021'},
    {value: '2022', viewValue: '2022'},
    {value: '2023', viewValue: '2023'},
    {value: '2024', viewValue: '2024'},
  ];
  initial(){
    this.form = this.myFormBuilder.group({
      poliza1: [Menssage.empty, Validators.compose([Validators.required])],
      years: [Menssage.empty, Validators.compose([Validators.required])],
      date: [Menssage.empty, Validators.compose([Validators.required])],
      ciudad: [Menssage.empty, Validators.compose([Validators.required])],
      certificado: [Menssage.empty, Validators.compose([Validators.required])],
      asegurado: [Menssage.empty, Validators.compose([Validators.required])],
      nit: [Menssage.empty, Validators.compose([Validators.required])],
    })

    this.formTwo = this.myFormBuilderTwo.group({
      identyContract: [Menssage.empty, Validators.compose([Validators.required])],
      descripcion: [Menssage.empty, Validators.compose([Validators.required])],
      moneda: [Menssage.empty, Validators.compose([Validators.required])],
      inicio: [Menssage.empty, Validators.compose([Validators.required])],
      fin: [Menssage.empty, Validators.compose([Validators.required])],
      
    })

  }
  clearForm(){
    Swal.fire({
      title: 'Borrar?',
      text: "Deseas borrar los datos ingresados",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borralo!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'El formulario ha sido borrado',
          'success'
        )
        this.form.reset()
      }
    })
  }
  clearFormTwo(){
    Swal.fire({
      title: 'Borrar?',
      text: "Deseas borrar los datos ingresados",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borralo!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'El formulario ha sido borrado',
          'success'
        )
        this.formTwo.reset()
      }
    })
  }
  
  sendForm(item:any){
    Swal.fire(
      'Good job!',
      'You clicked the button!',
      'success'
    )
    console.log(this.form)
    this.form.reset()
  }
  sendFormTwo(item:any){
    Swal.fire(
      'Good job!',
      'You clicked the button!',
      'success'
    )
    console.log(this.formTwo)
    this.formTwo.reset()
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
