import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()

export class EmployeeService{
    constructor(private _http: HttpClient){}

    getEmployees() : {}[]{
        return [{
            name:"Vikash",
            age: 30
        },{
            name:"Nicky",
            age: 20
        }]
    } 

     fetchDummyData(){
        const response = this._http.get("https://jsonplaceholder.typicode.com/todos");
        return response;
    }
}