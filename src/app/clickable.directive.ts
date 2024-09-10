import { Component, Directive, EventEmitter, HostListener, Output } from "@angular/core";

@Directive({
    selector : '[clickable]'
})
export class ClickableDirective{
    @Output() myClick = new EventEmitter();

    @HostListener('click')
    handleClick(){
        this.myClick.emit('Button CLicked')
    } 

}
