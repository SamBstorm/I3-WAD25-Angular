import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Shopping } from '../../../../shared/services/shopping';

@Component({
  selector: 'app-exo05-shopping-form',
  imports: [FormsModule],
  templateUrl: './exo05-shopping-form.html',
  styleUrl: './exo05-shopping-form.css',
})
export class Exo05ShoppingForm {
  private shoppingService : Shopping = inject(Shopping);

  public articleName? : string;
  public articleQuantity : number = 1;

  public onClickAjouter() : void{
    if(!this.articleName) throw new Error('Le nom de l\'article est obligatoire.');
    this.articleName = this.articleName.trim();
    if(this.articleName.length <= 0)  throw new Error('Le nom de l\'article est obligatoire.');
    if(this.articleQuantity < 1) throw new Error('La quantité de l\'article doit être supérieur à 1.');
    /*console.log({
      name : this.articleName,
      quantity : this.articleQuantity
    });*/
    this.shoppingService.addProduct(this.articleName, this.articleQuantity);
    this.articleName = undefined;
    this.articleQuantity = 1;
  }
}
