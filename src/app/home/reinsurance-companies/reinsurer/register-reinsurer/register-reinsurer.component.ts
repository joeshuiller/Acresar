import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Menssage } from 'src/app/models/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register-reinsurer',
  templateUrl: './register-reinsurer.component.html',
  styleUrls: ['./register-reinsurer.component.css']
})
export class RegisterReinsurerComponent implements OnInit {
  public form: FormGroup;
  public entities: any = [];
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
      names: [Menssage.empty, Validators.compose([Validators.required])],
      entities: [Menssage.empty, Validators.compose([Validators.required])],
      abbreviatedName:[Menssage.empty, Validators.compose([Validators.required])],
      cod: [Menssage.empty, Validators.compose([Validators.required])],
      nit: [Menssage.empty, Validators.compose([Validators.required])],
      contac: [Menssage.empty, Validators.compose([Validators.required])],
      adress: [Menssage.empty, Validators.compose([Validators.required])],
      state: [Menssage.empty, Validators.compose([Validators.required])],
      countryOrigin: [Menssage.empty, Validators.compose([Validators.required])],
      Qualification: [Menssage.empty, Validators.compose([Validators.required])],
      region: [Menssage.empty, Validators.compose([Validators.required])],
      ratingAgency: [Menssage.empty, Validators.compose([Validators.required])],
      RepresentativeOffice: [Menssage.empty, Validators.compose([Validators.required])],
    })
    
    this.getEntities()
  }
  saveData(item: any){
    this.authService.RegisterForm(item).then((res: any)=>{
      console.log('esta es tu respuesta',res);
      console.log(item)
    })
  }
  getEntities(){
    this.authService.getEntities().then((resunta:any)=>{
      console.log(resunta);
      this.entities = resunta
    })
  }
}
