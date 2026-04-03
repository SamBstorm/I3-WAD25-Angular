import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ILogin } from '../../../../shared/models/ilogin';

@Component({
  selector: 'app-exo06-form-builder',
  imports: [ReactiveFormsModule],
  templateUrl: './exo06-form-builder.html',
  styleUrl: './exo06-form-builder.css',
})
export class Exo06FormBuilder {

  private _fb : FormBuilder = inject(FormBuilder);

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
  }
}
