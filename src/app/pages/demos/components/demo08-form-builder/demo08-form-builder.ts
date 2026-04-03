import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IUser } from '../../../../shared/models/iuser';
import { CustomValidators } from '../../../../shared/validators/customValidators';

@Component({
  selector: 'app-demo08-form-builder',
  imports: [ReactiveFormsModule],
  templateUrl: './demo08-form-builder.html',
  styleUrl: './demo08-form-builder.css',
})
export class Demo08FormBuilder {
  private _fb: FormBuilder = inject(FormBuilder);

  public registerForm: FormGroup = this._fb.group({
    firstname: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(16)]],
    lastname: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(16)]],
    birthdate: [null, [Validators.required, CustomValidators.checkAge(18)]],
    email: [null, [Validators.required, Validators.email]],
    password: [
      null,
      [
        Validators.required,
        Validators.pattern(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&._=-])[A-Za-z\d@$!%*?&._=-]{8,64}$/,
        ),
      ],
    ],
    confirmPassword: [
      null,
      [
        Validators.required,
        Validators.pattern(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&._=-])[A-Za-z\d@$!%*?&._=-]{8,64}$/,
        ),
      ],
    ],
    newsletter: [true, []],
    consent: [null, [Validators.requiredTrue]],
  });

  public onSubmit(): void {
    if (this.registerForm.invalid) {
      console.error('Le formulaire est invalide');
    } else if (this.registerForm.value.password != this.registerForm.value.confirmPassword) {
      console.error('Le formulaire est invalide');
    } else {
      let newUser: IUser = {
        firstname: this.registerForm.controls['firstname'].value,
        lastname: this.registerForm.get('lastname')!.value,
        birthdate: this.registerForm.value.birthdate,
        email: this.registerForm.controls['email'].value,
        password: this.registerForm.controls['password'].value,
        newsletter: this.registerForm.controls['newsletter'].value,
      };
      console.log(newUser);
    }
  }
}
