import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Menssage } from 'src/app/models/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {
  public form: FormGroup
  public entities: any = [];
  public countries: any = [];
  public selectedOption: any;
  public createForm: any;
  constructor(
    private myFormBuilder: FormBuilder,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.initial()
  }
  initial(){
    this.form = this.myFormBuilder.group({
      entities: [Menssage.empty, Validators.compose([Validators.required])],
      businessName: [Menssage.empty, Validators.compose([Validators.required])],
      abbreviatedName:[Menssage.empty, Validators.compose([Validators.required])],
      nit: [Menssage.empty, Validators.compose([Validators.required])],
      cod: [Menssage.empty, Validators.compose([Validators.required])],
      phone: [Menssage.empty, Validators.compose([Validators.required])],
      adress: [Menssage.empty, Validators.compose([Validators.required])],
      contac: [Menssage.empty, Validators.compose([Validators.required])],
      countryOrigin: [Menssage.empty, Validators.compose([Validators.required])],
      region: [Menssage.empty, Validators.compose([Validators.required])],
    })
    
    this.getEntities();
    this.getCountries();
  }
  saveData(){
    console.log(this.form);
    
    // this.authService.RegisterForm(item).then((res: any)=>{
    //   console.log('esta es tu respuesta',res);
    //   console.log(item)
    // })
  }
  getEntities(){
    this.authService.getEntities().then((resunta:any)=>{
      console.log(resunta);
      this.entities = resunta
    })
  }
  getCountries(){
    this.authService.getCountries().then((resunta:any)=>{
      console.log(resunta);
      this.countries = resunta
    })
  }

}
