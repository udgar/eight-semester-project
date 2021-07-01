import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { RegistrationService } from 'src/app/service/registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user: User;
  constructor(private formBuilder: FormBuilder, private service: RegistrationService, private route: Router) { }

  ngOnInit(): void {

  }

  public registerForm = this.formBuilder.group({
    userName: ['', Validators.required],
    emailId: ['', [Validators.required, Validators.pattern("^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    password: ['', Validators.required],
    role:['',Validators.required]
  })
  addUser() {
    this.user = new User()
    this.user.emailId = this.registerForm.get('emailId').value
    this.user.userName = this.registerForm.get('userName').value
    this.user.password = this.registerForm.get('password').value
    this.user.role=this.registerForm.get('role').value
    console.log(this.user)
    this.service.registerNewUser(this.user).subscribe(data => {
      alert("New User has been register"),
      this.route.navigate(['/'])
    },
      error => {
        alert("A error has occured while adding the user"),
          this.route.navigate(['/'])
      }
    )
    this.user = new User()
  }

}
