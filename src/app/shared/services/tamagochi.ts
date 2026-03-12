import { Injectable, signal, Signal, WritableSignal } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class Tamagochi {
  private _levelHungry : WritableSignal<number> = signal(4);
  public get levelHungry() : Signal<number>{
    return this._levelHungry;
  }
  private _levelHappy : WritableSignal<number> = signal(1);
  public get levelHappy() : Signal<number>{
    return this._levelHappy;
  }
  public tamaName? : Signal<string> ;

  public startTamagochi(name : string) : void{
    this.tamaName = signal(name);
    setInterval(
      ()=>this.tamagochiLives(),
      30000
    );
  }

  private tamagochiLives(){
    if(!this.tamaName)throw new Error('Pas d\'animal');
    let rng : number = Math.floor(Math.random()*2);
    if(rng == 0){
      if(this.levelHungry() < 5){
        this._levelHungry.update(v=>v+1);
      }
    }
    else{
      if(this.levelHappy() > 0){
        this._levelHappy.update(v=>v-1);
      }
    }
  }

  public playGame() : void{
    if(!this.tamaName)throw new Error('Pas d\'animal');
    this._levelHappy.update(v=>v+1);
  }

  public feed() : void{
    if(!this.tamaName)throw new Error('Pas d\'animal');
    this._levelHungry.update(v=>v-1);
  }
}
