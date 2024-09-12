import { Router, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Employees } from './Employess/emoplyess.component';
import { EmployeeDetail } from './Employess/employeeDetails/employeeDetails.component';
import { DynamicComponentLoaderComponent } from './DynamicComponents/dynamic-component-loader/dynamic-component-loader.component';
import { TestComponentComponent } from './DynamicComponents/test-component/test-component.component';
import { AppTest } from './Test/test.component';

 const routes: Routes = [
        {
            // path:"", component :Employees,
            path : "", component : DynamicComponentLoaderComponent
        },
        {
            path : "modal",
            component : AppTest
        },
    {
    path:"employee",
    children:
    [
        {
            path:"", component:EmployeeDetail
        }
    ]
    }
];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{};
