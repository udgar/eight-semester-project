import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeServiceService } from 'src/app/service/employee-service.service';
import { RegistrationService } from 'src/app/service/registration.service';

@Component({
  selector: 'app-navbar',
  templateUrl:'./navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedIn:boolean=false;
  public employees:Employee[]

  constructor(private service:RegistrationService,private route:Router,
    private formBuilder:FormBuilder,private employeeService:EmployeeServiceService
    ) { }

  ngOnInit(): void {
    this.loggedIn=this.service.isLoggedIn();
  }
  public registerForm=this.formBuilder.group({
    name:['',Validators.required]
  })
  logOut(){
    this.service.logOut();
    location.reload()
    this.route.navigate(['/'])
  }
  searchEmployee(){
    let name=this.registerForm.get('name').value
    this.employeeService.getEmployeeByName(name).subscribe(data=>{this.employees=data},error=>alert("Error has occured"))
    this.employeeService.setSearchedEmployee(this.employees)
    this.route.navigate(['/searched-employee'])
  }

}
