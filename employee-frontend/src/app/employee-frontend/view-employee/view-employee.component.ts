import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeServiceService } from 'src/app/service/employee-service.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
  
  public employees:Employee[];
  public employee:Employee
  public identity:number

  constructor(private service:EmployeeServiceService,private route:Router,private active:ActivatedRoute) { }

  ngOnInit(): void {
    this.active.paramMap.subscribe((params:ParamMap)=>{
      this.identity=parseInt(params.get('id'))
  });
    this.service.getEmployee().subscribe(data=>{this.employees=data},
        (error:HttpErrorResponse)=>{alert(error.message)}
      )
      console.log(this.employees);

  }
  update(emp:Employee){
    const id=emp.id;
    console.log(id);
    this.route.navigate(['/update-employee',id]);
  }
  getDetails(emp:Employee){
    console.log(emp);
    this.route.navigate(['/employee-details',emp.id])
  }
  isSelected(emp:Employee):boolean{
    return emp.id==this.identity;
  }
  public highlighted="selected"

}
