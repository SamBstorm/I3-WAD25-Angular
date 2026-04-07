import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ILogin } from '../../../../shared/models/ilogin';
import { Router } from '@angular/router';
import { LoginStorage } from '../../../../shared/services/login-storage';

@Component({
  selector: 'app-exo06-form-builder',
  imports: [ReactiveFormsModule],
  templateUrl: './exo06-form-builder.html',
  styleUrl: './exo06-form-builder.css',
})
export class Exo06FormBuilder {

  private _router : Router = inject(Router);
  private _fb : FormBuilder = inject(FormBuilder);
  private _loginStorage : LoginStorage = inject(LoginStorage);

  public loginForm : FormGroup = this._fb.group({
    email : [null, [Validators.required, Validators.email]],
    password : [null, [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/), Validators.minLength(4), Validators.maxLength(16)]],
  });

  public onSubmit() : void{
    if(this.loginForm.invalid){ console.error('Formulaire non valide.'); return;}
    let loginInformation : ILogin = {
      email : this.loginForm.value.email,
      password : this.loginForm.value.password
    };
    console.log(loginInformation);
    //Appeller un service pour vérifier si l'utilisateur est correctement identifié
    //Si identifier rediriger grace au Router
    if(loginInformation.email == 'samuel.legrain@bstorm.be' && loginInformation.password=="Test1234=" ){
      this._loginStorage.setLogin(loginInformation);
      this._router.navigateByUrl('/home');
    }
  }
}
