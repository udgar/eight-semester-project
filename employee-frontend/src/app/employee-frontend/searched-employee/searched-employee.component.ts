import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeServiceService } from 'src/app/service/employee-service.service';

@Component({
  selector: 'app-searched-employee',
  templateUrl: './searched-employee.component.html',
  styleUrls: ['./searched-employee.component.css']
})
export class SearchedEmployeeComponent implements OnInit {

  constructor(private employeeService:EmployeeServiceService,private route:Router) { }
  public employees:Employee[]
  public employee:Employee

  ngOnInit(): void {
  
    this.employees=this.employeeService.getSearchedEmployee();
  }

  update(emp:Employee){
    const id=emp.id;
    this.route.navigate(['/update-employee',id]);
  }
  getDetails(emp:Employee){
    this.route.navigate(['/employee-details',emp.id])
  }
}
