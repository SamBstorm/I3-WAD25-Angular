import { Injectable, Signal, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Math {

  private _nb1 : WritableSignal<number> = signal<number>(0);
  public get nb1() : Signal<number>{
    return this._nb1;
  }
  public set nb1(value :number) {
    if(value < 0 || value > 5) throw new Error('La valeur de nb1 doit être entre 0 et 5');
    this._nb1.set(value);
  }

  private _nb2 : WritableSignal<number> = signal<number>(0);
  public get nb2() : Signal<number>{
    return this._nb2;
  }
  public set nb2(value :number) {
    if(value < 0 || value > 5) throw new Error('La valeur de nb1 doit être entre 0 et 5');
    this._nb2.set(value);
  }

  public addition() : number{
    return this._nb1() + this._nb2();
  }

}
