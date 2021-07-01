import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class LeaveServiceService {

  constructor(private http:HttpClient) { }

  public getLeavesList():Observable<Employee[]>{
    return this.http.get<Employee[]>("http://localhost:8082/leaves/get-list/")
}
public addNewLeave(employee:Employee):Observable<any>{
  return this.http.post("http://localhost:8082/leaves/add-leave",employee)
}
  public deleteLeave(id:number):Observable<any>{
    return this.http.delete("http://localhost:8082/leaves/remove-leave/"+id)
  }

}
