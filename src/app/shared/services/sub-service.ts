import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubService {

  private _myText? : string;

  public myText : BehaviorSubject<string| undefined> = new BehaviorSubject<string |undefined>(this._myText);

  public changeText(newText : string):void{
    this._myText = newText;
    this.myText.next(this._myText);
  }

  public clearText() : void{
    this._myText = undefined;
    this.myText.next(this._myText);
  }

}
