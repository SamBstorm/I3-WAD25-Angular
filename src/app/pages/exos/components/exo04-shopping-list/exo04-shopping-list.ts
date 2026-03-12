import { Component, input, inputBinding, InputSignal, output, OutputEmitterRef } from '@angular/core';

@Component({
  selector: 'app-exo04-shopping-list',
  imports: [],
  templateUrl: './exo04-shopping-list.html',
  styleUrl: './exo04-shopping-list.css',
})
export class Exo04ShoppingList {
  public products : InputSignal<string[]> = input.required<string[]>();

  public deleteEmiter: OutputEmitterRef<number> = output<number>();

  public supprimerProduit(index : number):void{
    this.deleteEmiter.emit(index);
  }
}
