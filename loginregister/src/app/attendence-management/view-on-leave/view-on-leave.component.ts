import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { LeaveServiceService } from 'src/app/service/leave-service.service';

@Component({
  selector: 'app-view-on-leave',
  templateUrl: './view-on-leave.component.html',
  styleUrls: ['./view-on-leave.component.css']
})
export class ViewOnLeaveComponent implements OnInit {
  public employees:Employee[]
  public employee:Employee

  constructor(private service:LeaveServiceService,private route:Router) { }

  ngOnInit(): void {
    this.service.getLeavesList().subscribe(data=>{
        this.employees=data,console.log(this.employees)
    },
      error=>{
        alert("Some error has occured")
      }
    )
  }
  editLeave(employee:Employee){
    this.route.navigate(['/leave-dashboard/edit-leave',employee.id])
  }

  deleteLeave(employee:Employee){
    let id=employee.id
    this.service.deleteLeave(id).subscribe(error=>{alert("An error has occured while removing leave")})
    this.route.navigate(['/leave-dashboard'])
  }
  viewLeaveDetails(employee:Employee){
    this.route.navigate(['/leave-dashboard/leave-details',employee.id])
  }

}
