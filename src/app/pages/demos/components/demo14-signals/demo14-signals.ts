import { Component, inject, OnInit, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SignService } from '../../../../shared/services/sign-service';

@Component({
  selector: 'app-demo14-signals',
  imports: [FormsModule],
  templateUrl: './demo14-signals.html',
  styleUrl: './demo14-signals.css',
})
export class Demo14Signals implements OnInit{
  private _signService : SignService = inject(SignService);
  public currentSignalText! : Signal<string|undefined>;
  public currentText? : string;
  
  ngOnInit(): void {
    this.currentSignalText = this._signService.myText;
  }
  
  public onSave():void{
    if(this.currentText){
      this._signService.changeText(this.currentText)
    }
    else{
      this._signService.clearText();
    }
  }
  
  public onReverse():void{
    console.log(this.currentText);    
    if(this.currentText){
      let inverse = this.currentText.split('').reverse().join('');
      this._signService.changeText(inverse);
      this.currentText = inverse;
    }
  }

}
