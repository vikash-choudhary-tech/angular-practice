import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "age",
    pure: true
})

export class AgePipe implements PipeTransform{
    transform(employees: any, arg:any) {
      console.log("age pipe executed");
      return employees.filter((employee:any)=> employee.age < arg)
    }   
}

