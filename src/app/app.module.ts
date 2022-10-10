import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { CompanyCompComponent } from './company-comp/company-comp.component';
import { EmployeeCompComponent } from './employee-comp/employee-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyCompComponent,
    EmployeeCompComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
