import { Component, inject, OnInit } from '@angular/core';
import { Math } from '../../../../shared/services/math';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo06-service-form',
  imports: [FormsModule],
  templateUrl: './demo06-service-form.html',
  styleUrl: './demo06-service-form.css',
})
export class Demo06ServiceForm implements OnInit {
  public nb1 : number = 0;
  public nb2 : number = 0;

  private mathService : Math = inject(Math);

  public sauvegarderValeurs():void{
    this.mathService.nb1 = this.nb1;
    this.mathService.nb2 = this.nb2;
  }
  
  ngOnInit(): void {
    this.nb1 = this.mathService.nb1();
    this.nb2 = this.mathService.nb2();
  }

}
