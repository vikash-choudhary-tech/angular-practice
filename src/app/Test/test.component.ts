import { Component, Directive } from "@angular/core";

@Component({
    selector : 'app-test',
    template : `<div>Hello</div>`
})

export class AppTest {
    ngOnInit(){
        console.log("Hello from App test")
    }
}

