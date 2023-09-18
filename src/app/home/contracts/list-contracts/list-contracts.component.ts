import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-list-contracts',
  templateUrl: './list-contracts.component.html',
  styleUrls: ['./list-contracts.component.css']
})
export class ListContractsComponent implements OnInit {

  constructor(
    private authService: AuthService

  ) { }

  ngOnInit(): void {
    this.getDta()
  }

  getDta(){
    this.authService.getDtaContracts().then(
      res => {
        console.log('esta es tu respuesta', res);
        //this.data = res;
      }
    ); 
  }

}
