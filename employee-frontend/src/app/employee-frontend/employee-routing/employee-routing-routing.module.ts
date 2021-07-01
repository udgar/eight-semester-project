import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from 'src/app/guard/auth-guard.guard';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { SearchedEmployeeComponent } from '../searched-employee/searched-employee.component';
import { UpdateEmployeeComponent } from '../update-employee/update-employee.component';
import { ViewEmployeeComponent } from '../view-employee/view-employee.component';

const routes: Routes = [
  {path:'employee-list',component:ViewEmployeeComponent,canActivate:[AuthGuardGuard]},
  {path:'add-employee',component:AddEmployeeComponent,canActivate:[AuthGuardGuard]},
  {path:'employee-details/:id',component:EmployeeDetailsComponent,canActivate:[AuthGuardGuard]},
  {path:'update-employee/:id',component:UpdateEmployeeComponent,canActivate:[AuthGuardGuard]},
  {path:'searched-employee',component:SearchedEmployeeComponent,canActivate:[AuthGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingRoutingModule { }
