import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-menu',
  templateUrl: './first-menu.component.html',
  styleUrls: ['./first-menu.component.css']
})
export class FirstMenuComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  navigate(item: string){
    this.router.navigate([item])
  }

}
