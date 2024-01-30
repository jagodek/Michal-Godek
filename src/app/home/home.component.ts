import { NavbarComponent } from './../common/navbar/navbar.component';
import { AppElementsServiceService } from './../services/app-elements-service.service';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent {
  @ViewChild(NavbarComponent, { read: ElementRef })
  private navElementRef?: ElementRef;

  showArrow = false;


  constructor(AppElementsServiceService: AppElementsServiceService) {
  }

  onScroll(event: any) {

      if (event.target) {
        console.log(event.target.scrollTop);

        if(event.target.scrollTop > 200 )
          this.showArrow = true;
        else
          this.showArrow = false;


      }

  }
}
