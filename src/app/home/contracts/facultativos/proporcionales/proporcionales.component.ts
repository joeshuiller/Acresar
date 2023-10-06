import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-proporcionales',
  templateUrl: './proporcionales.component.html',
  styleUrls: ['./proporcionales.component.css']
})
export class ProporcionalesComponent implements OnInit {

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }
  getDta(){

  }
}
