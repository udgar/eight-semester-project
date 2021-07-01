import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { EmployeeRoutingRoutingModule } from './employee-routing/employee-routing-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { SearchedEmployeeComponent } from './searched-employee/searched-employee.component';




@NgModule({
  declarations: [
    ViewEmployeeComponent,
    EmployeeDetailsComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    SearchedEmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    ViewEmployeeComponent,
    EmployeeDetailsComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent
  ]
})
export class EmployeeFrontendModule { }
