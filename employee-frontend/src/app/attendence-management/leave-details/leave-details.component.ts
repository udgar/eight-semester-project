import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeServiceService } from 'src/app/service/employee-service.service';

@Component({
  selector: 'app-leave-details',
  templateUrl: './leave-details.component.html',
  styleUrls: ['./leave-details.component.css']
})
export class LeaveDetailsComponent implements OnInit {

  public identity
  public employee:Employee
  constructor(private route:Router,private active:ActivatedRoute,private employeeService:EmployeeServiceService) { }
  
  ngOnInit(): void {
    this.active.paramMap.subscribe((params:ParamMap)=>{
      this.identity=parseInt(params.get('id'))
  });

    this.employeeService.getSingleEmployee(this.identity).subscribe(data=>this.employee=data,error=>console.log(error))
  }

  goBack(){

    this.route.navigate(['../../'],{relativeTo:this.active})
  }

}
