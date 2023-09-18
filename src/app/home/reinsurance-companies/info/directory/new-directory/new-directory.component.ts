import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Menssage } from 'src/app/models/router';

@Component({
  selector: 'app-new-directory',
  templateUrl: './new-directory.component.html',
  styleUrls: ['./new-directory.component.css']
})
export class NewDirectoryComponent implements OnInit {
  public form: FormGroup
  constructor(
    private myFormBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initial()
  }

  initial() {
    this.form = this.myFormBuilder.group({
      names: [Menssage.empty, Validators.compose([Validators.required])],
      position: [Menssage.empty, Validators.compose([Validators.required])],
      email: [Menssage.empty, Validators.compose([Validators.required, Validators.email])],
      adress: [Menssage.empty, Validators.compose([Validators.required])],
      phone: [Menssage.empty, Validators.compose([Validators.required])],
      country: [Menssage.empty, Validators.compose([Validators.required])],
    })

  }
  saveData(){

  }

}
