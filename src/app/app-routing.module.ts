import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { MyprofileComponent } from './myprofile/myprofile.component';

const routes: Routes = [
  {
    path:"header",component:HeaderComponent
  },
  {
    path:"main",component:MainComponent 
  },
{
  
  path:"main",component: MyprofileComponent
},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
