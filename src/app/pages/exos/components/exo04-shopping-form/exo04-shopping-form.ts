import { Component, output, OutputEmitterRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exo04-shopping-form',
  imports: [FormsModule],
  templateUrl: './exo04-shopping-form.html',
  styleUrl: './exo04-shopping-form.css',
})
export class Exo04ShoppingForm {

  public articleName? : string;
  public newProductEmitter : OutputEmitterRef<string> = output<string>();

  public ajouterArticle() : void{
    if(!this.articleName) throw new Error('Le nom est obligatoire');
    this.articleName = this.articleName.trim();
    if(this.articleName.length <= 0) throw new Error('Le nom est obligatoire');
    //Remplacer par un envois vers la liste
    this.newProductEmitter.emit(this.articleName);
    this.articleName = undefined;
  }
}
