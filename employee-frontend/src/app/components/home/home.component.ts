import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/service/registration.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:RegistrationService) { }

  public isLoggedIn:boolean

  ngOnInit(): void {
    if(this.service.isLoggedIn){
      this.isLoggedIn=true;
    }
    else{
      this.isLoggedIn=false;
    }
  }



}
