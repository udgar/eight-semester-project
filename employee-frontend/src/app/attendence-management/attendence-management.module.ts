import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewOnLeaveComponent } from './view-on-leave/view-on-leave.component';
import { ManageLeaveComponent } from './manage-leave/manage-leave.component';
import { LeaveDashboardComponent } from './leave-dashboard/leave-dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AttendenceRoutingRoutingModule } from './attendence-routing/attendence-routing-routing.module';
import { RouterModule } from '@angular/router';
import { EditLeaveComponent } from './edit-leave/edit-leave.component';
import { LeaveDetailsComponent } from './leave-details/leave-details.component';



@NgModule({
  declarations: [
    ViewOnLeaveComponent,
    ManageLeaveComponent,
    LeaveDashboardComponent,
    EditLeaveComponent,
    LeaveDetailsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    AttendenceRoutingRoutingModule,
    RouterModule
  ]
})
export class AttendenceManagementModule { }
