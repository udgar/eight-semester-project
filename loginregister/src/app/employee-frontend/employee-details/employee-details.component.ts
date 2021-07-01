import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeServiceService } from 'src/app/service/employee-service.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  public identity:number;
  public employee:Employee;
  constructor(private active:ActivatedRoute,private service:EmployeeServiceService,private route:Router) { }

  ngOnInit(): void {
    this.active.paramMap.subscribe((params:ParamMap)=>{
      this.identity=parseInt(params.get('id'))
  });
    this.service.getSingleEmployee(this.identity).subscribe(data=>this.employee=data,error=>console.log(error))
  }
  editEmployee(){
    this.route.navigate(['/update-employee',this.employee.id])
  }
  deleteEmployee(){
    this.service.deleteEmployee(this.employee.id).subscribe(data=>console.log(data),error=>console.log(error))
    this.route.navigate(['/'])
  }
  goBack(){

    this.route.navigate(['/employee-list',{id:this.employee.id}])
  }

}
