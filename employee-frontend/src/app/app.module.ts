import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatSliderModule} from '@angular/material/slider';
import { HomeComponent } from './components/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { AuthInterceptorInterceptor } from './service/auth-interceptor.interceptor';
import { EmployeeFrontendModule } from './employee-frontend/employee-frontend.module';
import { EmployeeRoutingRoutingModule } from './employee-frontend/employee-routing/employee-routing-routing.module';
import { AttendenceRoutingRoutingModule } from './attendence-management/attendence-routing/attendence-routing-routing.module';
import { RouterModule } from '@angular/router';
import { AttendenceManagementModule } from './attendence-management/attendence-management.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    HomeComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatButtonModule,
    EmployeeRoutingRoutingModule,
    AttendenceRoutingRoutingModule,
    RouterModule,
    AttendenceManagementModule
  ],
  providers: [[{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptorInterceptor,multi:true}]],
  bootstrap: [AppComponent]
})
export class AppModule { }
