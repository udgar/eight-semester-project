import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http:HttpClient) { }

  public generateToken(user:User){
    return this.http.post("http://localhost:8082/login",user)
  }


  //To log in the user
  logingUser(token){
    localStorage.setItem("token",token)
  }

  //check if the user is logged in
  isLoggedIn(){
    let token=localStorage.getItem("token")
    if(token==undefined||token==''||token==null){
      return false;
    }
    else{
      return true;
    }
  }

  //To logout the new user
  logOut(){
    localStorage.removeItem("token")
    return true;
  }

  getToken(){
    let token=localStorage.getItem("token")
    return token  
  }

  public registerNewUser(user:User):Observable<User>{
    return this.http.post<User>("http://localhost:8082/register",user)
  }
}
