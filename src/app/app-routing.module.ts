import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { OtherProjectsComponent } from './other-projects/other-projects.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'web-development',component:WebDevelopmentComponent},
  {path:'other-projects',component:OtherProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
