import { Component, inject, OnInit } from '@angular/core';
import { Math } from '../../../../shared/services/math';

@Component({
  selector: 'app-demo01-intro',
  imports: [],
  templateUrl: './demo01-intro.html',
  styleUrl: './demo01-intro.css',
})
export class Demo01Intro implements OnInit{
  private mathService : Math = inject(Math);
  public nbFromDemo06? : number;

  ngOnInit(): void {
    this.nbFromDemo06 = this.mathService.nb1();
  }
}
