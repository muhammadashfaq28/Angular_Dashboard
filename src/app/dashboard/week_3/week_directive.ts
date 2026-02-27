import { Directive, ElementRef, input, effect } from '@angular/core';

@Directive({
  selector: '[appFirst]',
  standalone: true,
})
export class First {

  FirstDirective = input<number>();

  constructor(private element: ElementRef) {

    
    effect(() => {
      const value = this.FirstDirective()!;

      if (value >= 10) {
        this.element.nativeElement.style.color = 'blue';
      } else if (value >= 8) {
        this.element.nativeElement.style.color = 'green';
      } else if (value >= 4) {
        this.element.nativeElement.style.color = 'red';
      } else {
        this.element.nativeElement.style.color = 'black';
      }
    });


//   effect(() => {
//   const value = this.FirstDirective() ?? 0;

//   let color = 'black'; 

//   if (value >= 4) color = 'red';
//   if (value >= 8) color = 'green';
//   if (value >= 10) color = 'pink';

//   this.element.nativeElement.style.color = color;
// });


  }
}
