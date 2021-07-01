import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from 'src/app/guard/auth-guard.guard';
import { EditLeaveComponent } from '../edit-leave/edit-leave.component';
import { LeaveDashboardComponent } from '../leave-dashboard/leave-dashboard.component';
import { LeaveDetailsComponent } from '../leave-details/leave-details.component';
import { ManageLeaveComponent } from '../manage-leave/manage-leave.component';
import { ViewOnLeaveComponent } from '../view-on-leave/view-on-leave.component';

const routes: Routes = [
  {path:'leave-dashboard',component:LeaveDashboardComponent,
    children:[
      {path:'view-on-leave',component:ViewOnLeaveComponent,canActivate:[AuthGuardGuard]},
      {path:'manage-leave',component:ManageLeaveComponent,canActivate:[AuthGuardGuard]},
      {path:'edit-leave/:id',component:EditLeaveComponent,canActivate:[AuthGuardGuard]},
      {path:'leave-details/:id',component:LeaveDetailsComponent,canActivate:[AuthGuardGuard]}
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendenceRoutingRoutingModule { }
