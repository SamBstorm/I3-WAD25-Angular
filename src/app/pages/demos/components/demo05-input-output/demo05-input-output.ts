import { Component } from '@angular/core';
import { Demo05InputOutputEnfant } from "../demo05-input-output-enfant/demo05-input-output-enfant";

@Component({
  selector: 'app-demo05-input-output',
  imports: [Demo05InputOutputEnfant],
  templateUrl: './demo05-input-output.html',
  styleUrl: './demo05-input-output.css',
})
export class Demo05InputOutput {

  public varParent : string = 'La variable du parent';

  public varEnfantFromEmetteur? : string;

  public onReceivedValue(value : string){
    this.varEnfantFromEmetteur = value;
  }
}
