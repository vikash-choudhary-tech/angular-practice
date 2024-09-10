import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : 'namePipe',
    pure : false
})

export class NamePipe implements PipeTransform{
    transform(value: any, ...args: any[]) {
        console.log("Name Pipe Executed");
        return "";
    }
}