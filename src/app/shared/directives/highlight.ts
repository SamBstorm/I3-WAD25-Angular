import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})

export class Highlight {

  private element : ElementRef = inject(ElementRef);

  @HostListener('mouseenter')
  public onMouseEnter() : void{
    this.element.nativeElement.style.backgroundColor = "yellow";
  }

  @HostListener('mouseout')
  public onMouseOut() : void{
    this.element.nativeElement.style=undefined;
  }
}
