import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { MyprofileComponent } from './myprofile/myprofile.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { AddcartComponent } from './addcart/addcart.component';
import { AddListComponent } from './add-list/add-list.component';
import { FormsModule } from '@angular/forms';
import { EheaderComponent } from './ecommerce/eheader/eheader.component';
import { SwichCaseComponent } from './swich-case/swich-case.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ToggleComponent } from './toggle/toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    
   
    MyprofileComponent,
             MainComponent,
             HeaderComponent,
             AddcartComponent,
             AddListComponent,
             EheaderComponent,
             SwichCaseComponent,
             DropdownComponent,
             ToggleComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
