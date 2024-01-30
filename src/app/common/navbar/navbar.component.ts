import { outputAst } from '@angular/compiler';
import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit{
  router!:Router;



  constructor(router:Router) {
    this.router = router;
  }

  ngOnInit(): void {
  }
}
