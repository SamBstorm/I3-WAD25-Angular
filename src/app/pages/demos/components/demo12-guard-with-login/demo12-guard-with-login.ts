import { Component, inject } from '@angular/core';
import { LoginStorage } from '../../../../shared/services/login-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo12-guard-with-login',
  imports: [],
  templateUrl: './demo12-guard-with-login.html',
  styleUrl: './demo12-guard-with-login.css',
})
export class Demo12GuardWithLogin {
  private _loginStorage : LoginStorage = inject(LoginStorage);
  private _router : Router = inject(Router);

  public onLogout() : void{
    this._loginStorage.removeLogin();
    this._router.navigateByUrl('/exos/loginForm');
  }
}
