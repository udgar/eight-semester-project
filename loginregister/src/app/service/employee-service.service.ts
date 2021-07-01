import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  private searchedEmployees:Employee[]

  constructor(private http:HttpClient) { }
  private apiUrl="localhost:8081/employee";

  public getEmployee():Observable<Employee[]>{
    return this.http.get<Employee[]>(`http://localhost:8082/employee/all`);
  }
  public getSingleEmployee(id:number):Observable<Employee>{
    return this.http.get<Employee>("http://localhost:8082/employee/find/"+id);
  }
  public addEmployee(employee:Employee):Observable<Employee>{
    return this.http.post<Employee>(`http://localhost:8082/employee/add`,employee);
  }
  public updateEmployee(employee:Employee):Observable<Employee>{
    console.log(employee)
    return this.http.post<Employee>("http://localhost:8082/employee/update",employee);
  }
  public deleteEmployee(id:number):Observable<any>{
    return this.http.delete("http://localhost:8082/employee/delete/"+id)
  }
  public checkEmployeeAccess():Observable<any>{
      return this.http.get("http://localhost:8082/employee/check-access")
  }

  public getEmployeeByName(name:string):Observable<Employee[]>{
    return this.http.get<Employee[]>("http://localhost:8082/employee/search-employee")
  }

  public setSearchedEmployee(employees:Employee[]){
      this.searchedEmployees=employees
  }
  public getSearchedEmployee():Employee[]{
    return this.searchedEmployees
  }


}
