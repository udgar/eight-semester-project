import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistrationService } from './registration.service';

@Injectable({
  providedIn: 'root'
})
export class DummyserviceService {

  constructor(private http:HttpClient,private loginService:RegistrationService) { }
  
  sayHello():Observable<any>{
  
    return this.http.get("http://localhost:8082/hello")
  }
}