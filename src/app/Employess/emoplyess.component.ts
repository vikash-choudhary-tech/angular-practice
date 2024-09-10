import { Component } from "@angular/core";
import { EmployeeService } from "./employees.service";

@Component({
    selector:'app-employees',
    templateUrl : './employees.component.html'
})

export class Employees{
    employees : any = [];
    constructor(private _employeesService: EmployeeService){}

    ngOnInit(){
        // Populate list of employees in employees array
        this.employees = this._employeesService.getEmployees();
        console.log("Init")
        const response = this._employeesService.fetchDummyData();
        response.subscribe(res=>console.log(res))
      
    }

    trackEmployeeId(index : number, employee: any){
       return employee.age
    }

    toggleEmployees(): void{
        this.employees.push({name:"Vikash", age:21}); // Doesn;t changes the refernece hence pure pipe is not executed
    }
    setNewEmployees():void{ 
        // It changes the reference to array hence the pure pipe gets executed
        this.employees = [ 
            ...this.employees,
            {
                name:"nndsfsdf",
                age : 32
            }
        ]
    }
}