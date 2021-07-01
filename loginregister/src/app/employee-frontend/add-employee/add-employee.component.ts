import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'selenium-webdriver';
import { Employee } from 'src/app/model/employee';
import { Leaves } from 'src/app/model/Leaves';
import { EmployeeServiceService } from 'src/app/service/employee-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private service:EmployeeServiceService,private formBuilder:FormBuilder,private route:Router,
      private routing:ActivatedRoute
    ) { }
  public employee:Employee;
  public leave:Leaves;

  ngOnInit(): void {
    this.service.checkEmployeeAccess().subscribe(data=>console.log(data),error=>{
      alert("The user is not authorized to perform this action")
      this.route.navigate(['../'],{relativeTo:this.routing})
    })
  }
  public registerForm=this.formBuilder.group({
    name:['',Validators.required],
    email:['',[Validators.required,Validators.pattern("^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    phoneNumber:['',[Validators.required,Validators.pattern("^[0-9]{10}$")]],
    imageUrl:['',Validators.required],
    position:['',Validators.required],
    gender:['',Validators.required],
    
})
  addEmployee(){
    
    this.employee=new Employee();

    this.employee.name=this.registerForm.get('name').value;
    
    this.employee.email=this.registerForm.get('email').value;
    
    this.employee.phoneNumber=this.registerForm.get('phoneNumber').value;
    
    this.employee.imageUrl=this.registerForm.get('imageUrl').value;
    
    this.employee.position=this.registerForm.get('position').value;

    this.employee.gender=this.registerForm.get('gender').value;
    this.employee.leaves={
      isOnLeave:false,
      fromDate:null,
      toDate:null,
      reason:null,
      leaveType:null,
      duration:null
    };

  
    this.service.addEmployee(this.employee).subscribe(data=>{console.log(data),this.route.navigate(['/employee-list'])},
    error=>{alert("The adding of the employee encountered error"),this.route.navigate(['/employee-list'])} 
    );
    
    this.employee=new Employee();
    

  }

  

}
