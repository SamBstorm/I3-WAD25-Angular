import { Component, input, InputSignal, OnInit, output, OutputEmitterRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo05-input-output-enfant',
  imports: [FormsModule],
  templateUrl: './demo05-input-output-enfant.html',
  styleUrl: './demo05-input-output-enfant.css',
})
export class Demo05InputOutputEnfant implements OnInit {
  
  public inputFromParent : InputSignal<string | undefined> = input<string>();
  public varEnfant : string = 'La variable de l\'enfant';
  
  public outputEmetteur : OutputEmitterRef<string> = output<string>();
  
  public onValueChange(value : string){
    this.outputEmetteur.emit(value);
  }

  ngOnInit(): void {
    setTimeout(()=>this.outputEmetteur.emit(this.varEnfant));
  }
}
