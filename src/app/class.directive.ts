import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appClass]',
})
export class ClassDirective {
  constructor(element: ElementRef) {
    element.nativeElement.style = 'color:red';
  }
}
