import { Component, computed, signal } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';

import { CommonModule } from '@angular/common';
import { CustomPipe } from './week_pipe';
import { First } from './week_directive';






@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NgIf, NgFor, First, CustomPipe, CommonModule,],
  templateUrl: './week3.html',
  styleUrl: './week3.css'
})
export class week3 {



  isDarkMode = signal(false);

  toggleTheme() {
    this.isDarkMode.update(v => !v);
  }



  counter = signal(0)
  showList = signal(true)

  list = computed(() => {
    return Array.from({ length: this.counter() }, (_, i) => i + 1);
  });
  //  get list() {
  //  return Array.from({ length: this.counter() }, (_, i) => i + 1);
  //   }

  increment() {
    this.counter.update(a => a < 12 ? a + 1 : 0)

  }
  decrement() {
    this.counter.update(a => a > 0 ? a - 1 : 0)
  }

  toggle() {
    this.showList.update(a => !a);
  }



}


