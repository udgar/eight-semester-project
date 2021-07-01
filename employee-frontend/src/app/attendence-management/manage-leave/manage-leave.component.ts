import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeServiceService } from 'src/app/service/employee-service.service';
import { LeaveServiceService } from 'src/app/service/leave-service.service';

@Component({
  selector: 'app-manage-leave',
  templateUrl: './manage-leave.component.html',
  styleUrls: ['./manage-leave.component.css']
})
export class ManageLeaveComponent implements OnInit {
  public employees:Employee[]
  public employee:Employee

  constructor(private employeeService:EmployeeServiceService,
    private leaveService:LeaveServiceService,
    private route:Router,
    private routing:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.employeeService.getEmployee().subscribe(data=>{this.employees=data},error=>{alert(error)})

  }

  editLeave(employee:Employee){
    this.route.navigate(['/leave-dashboard/edit-leave',employee.id])
  }

}
