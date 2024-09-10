import { Component } from "@angular/core";
import { EmployeeDetailService } from "./employee-detail.service";

@Component({
    selector:'app-employee-details',
    templateUrl:"./employeeDetails.component.html"
})

export class EmployeeDetail{

    dummmyData : any = [];

    constructor(private _employeeDetailService : EmployeeDetailService){}

    ngOnInit(): void{
        //get Details of the employee using http
        this._employeeDetailService.getDummyData().subscribe(res => this.dummmyData = res);
    }
}