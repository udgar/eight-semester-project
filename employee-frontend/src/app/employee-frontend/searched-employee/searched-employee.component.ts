import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeServiceService } from 'src/app/service/employee-service.service';

@Component({
  selector: 'app-searched-employee',
  templateUrl: './searched-employee.component.html',
  styleUrls: ['./searched-employee.component.css']
})
export class SearchedEmployeeComponent implements OnInit {

  constructor(private employeeService:EmployeeServiceService,private route:Router,private activated:ActivatedRoute) { }
  public employees:Employee[]
  public employee:Employee
  public searchedname:string

  ngOnInit(): void {
    this.activated.paramMap.subscribe((params:ParamMap)=>{
      this.searchedname=(params.get('name'))
  });
    this.employeeService.getEmployeeByName(this.searchedname).subscribe(data=>{this.employees=data},error=>{alert("The employee/s cannot be found"),
      this.route.navigate(['employee-list'])
  });

  this.route.routeReuseStrategy.shouldReuseRoute=()=>{
    return false;
  }
  }

  update(emp:Employee){
    const id=emp.id;
    this.route.navigate(['/update-employee',id]);
  }
  getDetails(emp:Employee){
    this.route.navigate(['/employee-details',emp.id])
  }
}
