import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { Leaves } from 'src/app/model/Leaves';
import { EmployeeServiceService } from 'src/app/service/employee-service.service';
import { LeaveServiceService } from 'src/app/service/leave-service.service';

@Component({
  selector: 'app-edit-leave',
  templateUrl: './edit-leave.component.html',
  styleUrls: ['./edit-leave.component.css']
})
export class EditLeaveComponent implements OnInit {

  public identity
  public employee:Employee
  public recievedEmployee:Employee
  constructor(private route:Router,private active:ActivatedRoute,
    private formBuilder:FormBuilder,
    private leaveService:LeaveServiceService,
    private employeeService:EmployeeServiceService,
    private routing:ActivatedRoute,
  
    ) { }

  ngOnInit(): void {
    this.employeeService.checkEmployeeAccess().subscribe(data=>console.log(data),error=>{
      alert("The user is not authorized to perform this action")
      this.route.navigate(['../'],{relativeTo:this.routing})
    })
    this.active.paramMap.subscribe((params:ParamMap)=>{
      this.identity=parseInt(params.get('id'))
  });
    this.employeeService.getSingleEmployee(this.identity).subscribe(data=>this.recievedEmployee=data,error=>{alert("Error has occured")
    ,this.route.navigate(['/leave-dashboard'])
  })
  }
  public registerForm=this.formBuilder.group({
    fromDate:[Date,Validators.required],
    toDate:[Date,Validators.required],
    leaveType:['',Validators.required],
    reason:['',Validators.required],
    duration:[Number,Validators.required]
  })

  addLeave(){
    this.employee=new Employee()
    this.employee=this.recievedEmployee
    this.employee.leaves={
        fromDate:this.registerForm.get('fromDate').value,
        toDate:this.registerForm.get('toDate').value,
        duration:this.registerForm.get('duration').value,
        reason:this.registerForm.get('reason').value,
        leaveType:this.registerForm.get('leaveType').value,
        isOnLeave:true
    }
    this.leaveService.addNewLeave(this.employee).subscribe(error=>{alert("Error while adding the leave"),this.route.navigate(['/leave-dashboard'])})
    this.employee=new Employee()
    this.route.navigate(['/leave-dashboard'])
    
  }

}
