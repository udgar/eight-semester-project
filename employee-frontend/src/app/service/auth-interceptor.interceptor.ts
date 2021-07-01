import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { RegistrationService } from './registration.service';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor(private registerService:RegistrationService,private route:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request.headers)
    let token=this.registerService.getToken();
    console.log(token)
    if(token!=null){
      request = request.clone({
        setHeaders: {
          Authorization:`Bearer ${token}`
        }
      });
    }
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMsg = '';
        if (error.error instanceof ErrorEvent) {
          alert("Something was wrong in the client code")
        }
        else {
          if(error.status==401){
            alert("Proper authentication for the client is required")
            this.route.navigate(['/login'])
          }
          else if(error.status==403){
            alert("The curent user is not authorized for this task")
            this.route.navigate(['/employee-list'])
          }
          else if(error.status==500){
            alert("Some internal error has occured")
            this.route.navigate(['/employee-list'])
          }
          else if(error.status==404){
            alert("The resource you are looking for is not available")
            this.route.navigate(['/employee-list'])
          }
          else{
            alert("Some error has occured")
          }
        }
        console.log(errorMsg);
        return throwError(errorMsg);
      }))
  }
}
