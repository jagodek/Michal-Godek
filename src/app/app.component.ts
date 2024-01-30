import { AppElementsServiceService } from './services/app-elements-service.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavbarComponent } from './common/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Michal-Godek';
  @ViewChild(NavbarComponent, { read: ElementRef }) private navElementRef?: ElementRef;

  constructor(private AppElementsServiceService: AppElementsServiceService){

  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.AppElementsServiceService.navElement = this.navElementRef?.nativeElement;
    console.log('set');
    console.log(this.AppElementsServiceService.navElement);


  }
}
