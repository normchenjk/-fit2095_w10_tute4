import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: "listEmployees", component: ViewEmployeeComponent },
  { path: "addEmployees", component: AddEmployeeComponent },
  { path: "", component: HomeComponent }
  // { path: "**", redirectTo: "listEmployees", pathMatch: "full"}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewEmployeeComponent,
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true }),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
