import { Component } from '@angular/core';
import { Exo04ShoppingForm } from "../exo04-shopping-form/exo04-shopping-form";
import { Exo04ShoppingList } from '../exo04-shopping-list/exo04-shopping-list';

@Component({
  selector: 'app-exo04-shopping',
  imports: [Exo04ShoppingForm, Exo04ShoppingList],
  templateUrl: './exo04-shopping.html',
  styleUrl: './exo04-shopping.css',
})
export class Exo04Shopping {

  public products : string[] = ['Tomates', 'Basilic', 'Farine'];

  public deleteProductIndex(index: number):void{
    this.products.splice(index,1);
  }

  public addProduct(productName : string){
    if(!productName || productName.length <=0) throw new Error('Nom du produit incorrect...');
    if(this.products.filter(p=>p == productName).length >= 1) throw new Error('Ce produit est déjà dans la liste...');
    this.products.push(productName);
  }
}
