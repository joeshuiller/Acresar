import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Menssage } from 'src/app/models/router';
import { AlertService } from 'src/app/service/alert.service';
import { AuthService } from 'src/app/service/auth.service';

interface NgbDateStruct {

  year: number;

  month: number;

  day: number;
}
@Component({
  selector: 'app-cuota-edit',
  templateUrl: './cuota-edit.component.html',
  styleUrls: ['./cuota-edit.component.css']
})
export class CuotaEditComponent implements OnInit {
  cuota: '';
  form: FormGroup;
  fecha1: NgbDateStruct = { day: 0, month: 0, year: 0 }
  fecha2: NgbDateStruct = { day: 0, month: 0, year: 0 }
  public selectedOption: any;
  public money: any
  constructor(
    private authService: AuthService,
    private router: Router,
    private myFormBuilder: FormBuilder,
    private alert: AlertService,

  ) { }

  ngOnInit(): void {
    //this.alert.loading();
    this.initial()
  }

  initial() {
    const id = JSON.parse(sessionStorage.getItem('cp'));
    this.authService.getDtaForm(id.a).then(
      res => {
        let cnt = res.cnt;
        const fIni = cnt.r.split('-');
        const fFin = cnt.e.split('-');
        this.cuota = cnt.o
        this.fecha1 = { year: fIni[0], month: fIni[1], day: fIni[2] };
        this.fecha2 = { year: fFin[0], month: fFin[1], day: fFin[2] };

        
        /*Este es el Formulario*/
        this.form = this.myFormBuilder.group({
          codigoContrato: [cnt.o, Validators.compose([Validators.required])],
          descripcion: [cnt.c, Validators.compose([Validators.required])],
          epiContrato: [cnt.epi, Validators.compose([Validators.required])],
          year: [this.fecha1.year, Validators.compose([Validators.required])],
          month: [this.fecha1.month, Validators.compose([Validators.required])],
          day: [this.fecha1.day, Validators.compose([Validators.required])],
          hour: [cnt.hrn, Validators.compose([Validators.required])],
          currency: [cnt.hrn, Validators.compose([Validators.required])],
          dayTwo: [this.fecha2.day, Validators.compose([Validators.required])],
          monthTwo: [this.fecha2.month, Validators.compose([Validators.required])],
          yearTwo: [this.fecha2.year, Validators.compose([Validators.required])],
          hourTwo: [cnt.hrf, Validators.compose([Validators.required])],
          siniestros: ['', Validators.compose([Validators.required])],
        })
        console.log(this.fecha1);

      })
    this.getMoney();
  }
  
  get fecha1String(): NgbDateStruct {
    return this.fecha1;
  }
  getMoney(){
    this.authService.getCurrency().then((resulta: any)=>{
      console.log('esta son las monedas: ', resulta)
      this.money = resulta;
    }).catch(err => {
      console.log(err)
    })
  }
}
