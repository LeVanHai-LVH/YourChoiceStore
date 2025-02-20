import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appClickOutSide]'
})
export class ClickOutSideDirective {

  constructor(private elementRef : ElementRef) { }

  @Output() clickOutSide = new EventEmitter<void>();

  @HostListener('document:click', ['$event'])
  onClickCloseOutSide(event: Event) {
    if(!this.elementRef.nativeElement.contains(event.target)){
      this.clickOutSide.emit();
    }
  }

}
