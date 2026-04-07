import { Injectable, Signal, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignService {

  private _myText? : string;

  private _signalMyText : WritableSignal<string |undefined> = signal(this._myText);

  public get myText() : Signal<string |undefined> {
    return this._signalMyText as Signal<string | undefined>;
  }

  public changeText(newText : string) : void{
    this._myText = newText;
    this._signalMyText.set(this._myText);
  }

  public clearText() : void{
    this._myText = undefined;
    this._signalMyText.set(this._myText);
  }
}
