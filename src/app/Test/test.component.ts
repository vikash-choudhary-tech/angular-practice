import { Component, Directive } from "@angular/core";
import { ModalService } from "../modal.service";

@Component({
    selector : 'app-test',
    template : `<div>
        Hello
                    <button (click)="showModal()">Toggle Modal</button>
                    <app-modal-test *ngIf="modalOpen"></app-modal-test>
                </div>
    `
})

export class AppTest {
    modalOpen : boolean = false;
    constructor(private modalService : ModalService){}

    ngOnInit(){
        console.log("Hello from App test")
    }
    showModal(){
       this.modalOpen = this.modalService.showModal(this.modalOpen);
    }
}

