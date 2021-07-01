import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { RegistrationService } from 'src/app/service/registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user:User

  constructor(private formBuilder:FormBuilder,private service:RegistrationService,private route:Router) { }

  ngOnInit(): void {

  }
  public registerForm=this.formBuilder.group({
      userName:['',Validators.required],
      password:['',Validators.required]
  })

  login(){
    this.user=new User()
    this.user.userName=this.registerForm.get("userName").value
    this.user.password=this.registerForm.get("password").value
    this.service.generateToken(this.user).subscribe((response:any)=>{console.log(response.token),this.service.logingUser(response.token),
      window.location.replace('/employee-list')},
      error=>{alert(error.message)}
    )
    this.user=new User()
    this.route.navigate(['/dashboard'])
    
  }


}
