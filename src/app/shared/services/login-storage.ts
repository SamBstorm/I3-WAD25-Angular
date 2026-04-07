import { Injectable } from '@angular/core';
import { ILogin } from '../models/ilogin';

@Injectable({
  providedIn: 'root',
})
export class LoginStorage {
  public setLogin(login : ILogin){
    sessionStorage.setItem('login',JSON.stringify(login));
  }

  public getLogin() : ILogin | null{
    return JSON.parse(sessionStorage.getItem('login') ?? 'null');
  }

  public removeLogin() : void{
    sessionStorage.removeItem('login');
  }
}
