import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeServiceService } from 'src/app/service/employee-service.service';

@Component({
  selector: 'employee-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private active: ActivatedRoute, private route: Router,
    public service: EmployeeServiceService, private routing: ActivatedRoute) { }
  public identity
  public employee
  public registerForm

  ngOnInit(): void {

    this.service.checkEmployeeAccess().subscribe(data => console.log(data), error => {
      alert("The user is not authorized to perform this action")
      this.route.navigate(['../'], { relativeTo: this.routing })
    })

    this.active.paramMap.subscribe((params: ParamMap) => {
      this.identity = parseInt(params.get('id'));
    })
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern("^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      phoneNumber: ['', [Validators.required,Validators.pattern("^[0-9]{10}$")]],
      imageUrl: ['', Validators.required],
      position: ['', Validators.required],
      gender:['',Validators.required]
    })
  }

  editEmployee() {
    this.employee = new Employee();
    this.employee.name = this.registerForm.get('name').value;
    this.employee.email = this.registerForm.get('email').value;
    this.employee.phoneNumber = this.registerForm.get('phoneNumber').value;
    this.employee.imageUrl = this.registerForm.get('imageUrl').value;
    this.employee.position = this.registerForm.get('position').value;
    this.employee.gender=this.registerForm.get('gender').value;
    this.employee.id = this.identity;
    this.service.updateEmployee(this.employee).subscribe(data => console.log(data), error => console.log(error),
      () => { this.route.navigate(['/view']) }
    );
    this.employee = new Employee();
  }
}
