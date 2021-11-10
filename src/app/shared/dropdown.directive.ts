import { Directive, HostBinding, HostListener, Input } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
    /* Enclosing the name in square brackets makes this an attribute name */
})
export class DropddownDirective {
    
    /* HostBinding allows you to attach a CSS class to a value.
    Here, the "open" property is assigned to the class of an HTML tag where 
    this directive is use --- depending on whether isOpen = true or false */
    @HostBinding('class.open') isOpen: boolean = false;


    /* HostListener waits for a particular DOM event to be recorded
    before executing the following method instructions */
    @HostListener('click') openMenue() {
        this.isOpen = !this.isOpen;
    }

}