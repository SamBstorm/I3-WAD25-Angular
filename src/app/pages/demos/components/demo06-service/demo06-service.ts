import { Component, computed, inject, OnInit, Signal } from '@angular/core';
import { Math } from '../../../../shared/services/math';
import { Demo06ServiceForm } from "../demo06-service-form/demo06-service-form";

@Component({
  selector: 'app-demo06-service',
  imports: [Demo06ServiceForm],
  //providers : [Math],   //Permet d'obtenir une instance privatisée pour le composant, une instance différente et locale
  templateUrl: './demo06-service.html',
  styleUrl: './demo06-service.css',
})
export class Demo06Service {

  private mathService : Math = inject(Math);
  public myFirstNumber : Signal<number> = this.mathService.nb1;
  public mySecondNumber : Signal<number> = this.mathService.nb2;
  public result : Signal<number> = computed(() => this.mathService.addition());

}
