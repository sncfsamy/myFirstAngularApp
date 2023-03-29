import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFirstMovie]'
})
export class FirstMovieDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit(): void {
    
  }
  @HostBinding('class.hover') hovering = false;
  @HostListener('mouseenter') mouseEnterEvent (eventData: Event) {
    this.hovering = true;
  }
  @HostListener('mouseleave') mouseLeaveEvent (eventData: Event) {
    this.hovering = false;
  }
}
