import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  navbar?: HTMLElement;

  constructor() { }

  setNavBar(navbar:HTMLElement){
    this.navbar = navbar;
  }

  
}
