import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ClickableDirective } from "./clickable.directive";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { Employees } from "./Employess/emoplyess.component";
import { EmployeeService } from "./Employess/employees.service";
import { EmployeeDetail } from "./Employess/employeeDetails/employeeDetails.component";
import { EmployeeDetailService } from "./Employess/employeeDetails/employee-detail.service";
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app.routes";
import { AgePipe } from "./Employess/agePipe.pipe";
import { NamePipe } from "./Employess/namePipe.pipe";
import { ReactiveFormsComponent } from "./reactive-forms/reactive-forms.component";
import { ReactiveFormsModule } from "@angular/forms";
import { TestInterceptor } from "./Interceptors/test-interceptor";
import { AppTest } from "./Test/test.component";
import { PlaceholderDirective } from "./DynamicComponents/placeholder.directive";
import { DynamicComponentLoaderComponent } from "./DynamicComponents/dynamic-component-loader/dynamic-component-loader.component";
import { TestComponentComponent } from './DynamicComponents/test-component/test-component.component';
import { ModalTestComponent } from './modal-test/modal-test.component';
import { HttpPracticeComponent } from "./http-practice/http-practice.component";

@NgModule({
    declarations : [AppComponent,ReactiveFormsComponent,ClickableDirective,Employees,EmployeeDetail, AgePipe, NamePipe, AppTest, PlaceholderDirective, DynamicComponentLoaderComponent, TestComponentComponent, ModalTestComponent, HttpPracticeComponent],
    imports:[CommonModule,BrowserModule,HttpClientModule, AppRoutingModule, ReactiveFormsModule],
    bootstrap : [AppComponent],
    providers : [EmployeeService,EmployeeDetailService, 
        { provide: HTTP_INTERCEPTORS, useClass: TestInterceptor, multi: true }
    ]
})

export class AppModule{};