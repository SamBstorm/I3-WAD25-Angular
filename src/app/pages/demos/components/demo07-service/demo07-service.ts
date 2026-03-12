import { Component, inject, signal, Signal } from '@angular/core';
import { Tamagochi } from '../../../../shared/services/tamagochi';
import { ITamagochi } from '../../../../shared/models/itamagochi';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo07-service',
  imports: [FormsModule],
  templateUrl: './demo07-service.html',
  styleUrl: './demo07-service.css',
})
export class Demo07Service {
  private tamagochiService : Tamagochi = inject(Tamagochi);

  public tamaName? : string;
  public startGame : boolean = false;
  public levelHappy : Signal<number> = signal<number>(0);
  public levelHungry : Signal<number> = signal<number>(0);

  public startTama() : void{
    if(!this.tamaName || this.tamaName.length <= 0) throw new Error('Nom invalide');
    this.tamagochiService.startTamagochi(this.tamaName);
    this.startGame = true;
    this.levelHappy = this.tamagochiService.levelHappy;
    this.levelHungry = this.tamagochiService.levelHungry;
  }

  public onClickFeed() : void{
    this.tamagochiService.feed();
  }

  public onClickPlay() : void{
    this.tamagochiService.playGame();
  }

}
