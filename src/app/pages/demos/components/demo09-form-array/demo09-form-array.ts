import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo09-form-array',
  imports: [ReactiveFormsModule],
  templateUrl: './demo09-form-array.html',
  styleUrl: './demo09-form-array.css',
})
export class Demo09FormArray {
  private _fb : FormBuilder = inject(FormBuilder);


  public guestForm : FormGroup = this._fb.group({
    host: [null, Validators.required],
    guests : this._fb.array([])
  });

  public getGuestsArray() : FormArray {
    return this.guestForm.controls['guests'] as FormArray;
  }

  public addGuest() : void{
    this.getGuestsArray().push(new FormControl(null, [Validators.required]));
  }

  public subGuest() : void{
    this.getGuestsArray().removeAt(this.getGuestsArray().length-1);
  }
  
  public onSubmit() : void{
    console.log(this.guestForm);
  }
}
