import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Menssage } from 'src/app/models/router';
import { AuthService } from 'src/app/service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contract-association-contract-form',
  templateUrl: './contract-association-contract-form.component.html',
  styleUrls: ['./contract-association-contract-form.component.css']
})
export class ContractAssociationContractFormComponent implements OnInit {

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
      contractType: [Menssage.empty, Validators.compose([Validators.required])],
      id: [Menssage.empty, Validators.compose([Validators.required])],
      description: [Menssage.empty, Validators.compose([Validators.required])],
      inicio: [Menssage.empty, Validators.compose([Validators.required])],
      final: [Menssage.empty, Validators.compose([Validators.required])],
      ramo: [Menssage.empty, Validators.compose([Validators.required])],
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
  
  sendForm(item:any){
    Swal.fire(
      'Good job!',
      'You clicked the button!',
      'success'
    )
    console.log(this.form)
  }


}
