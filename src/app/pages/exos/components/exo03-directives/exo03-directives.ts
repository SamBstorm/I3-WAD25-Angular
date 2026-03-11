import { Component } from '@angular/core';
import { IAnimal } from '../../../../shared/models/ianimal';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exo03-directives',
  imports: [FormsModule],
  templateUrl: './exo03-directives.html',
  styleUrl: './exo03-directives.css',
})
export class Exo03Directives {
  public animalSpecies : string[] = ['Chat','Chien','Lapin'];

  public animalName? : string;
  public animalSpecy : string = 'none';

  public animals : IAnimal[] = [];

  public onClickAjouterAnimal(): void{
    if(!this.animalName || this.animalName.trim().length <= 0) throw new Error('L\'animal doit avoir un nom.');
    if(this.animalSpecy == 'none') throw new Error('L\'animal doit avoir une espèce.');
    let animal : IAnimal = {
      name : this.animalName,
      specy : this.animalSpecy,
      isWalking : false
    };
    this.animals.push(animal);
    this.animalName = undefined;
    this.animalSpecy = 'none';
  }

  public onClickSwitchWalking(index : number) : void{
    this.animals[index].isWalking = !this.animals[index].isWalking;
  }
}
