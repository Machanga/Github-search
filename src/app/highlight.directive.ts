import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) { }

  @HostListener('mouseover') onMouseOver(){
    this.highlight("green");
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.highlight("black");
  }

  private highlight(action:string){
    this.elem.nativeElement.style.color = action;
  }
}
