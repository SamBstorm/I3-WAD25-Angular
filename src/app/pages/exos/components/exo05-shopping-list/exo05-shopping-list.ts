import { Component, inject, Signal } from '@angular/core';
import { Shopping } from '../../../../shared/services/shopping';
import { IShoppingDetail } from '../../../../shared/models/ishopping-detail';

@Component({
  selector: 'app-exo05-shopping-list',
  imports: [],
  templateUrl: './exo05-shopping-list.html',
  styleUrl: './exo05-shopping-list.css',
})
export class Exo05ShoppingList {
  private shoppingService : Shopping = inject(Shopping);

  public products : Signal<IShoppingDetail[]> = this.shoppingService.productList;

  public onClickSupprimer(productName : string) : void{
    this.shoppingService.deleteProduct(productName);
  }

  public onClickSubOne(productName : string) : void{
    this.shoppingService.decreaseQuantity(productName);
  }

  public onClickAddOne(productName : string) : void{
    this.shoppingService.increaseQuantity(productName);
  }
}
