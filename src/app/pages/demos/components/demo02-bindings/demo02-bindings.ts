import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo02-bindings',
  imports: [FormsModule],
  templateUrl: './demo02-bindings.html',
  styleUrl: './demo02-bindings.css',
})
export class Demo02Bindings {

  public username : string;
  public bindingSymbols : string = "{{...}}";
  public favoriteColor? : string;
  public count : number = 0;
  public isSwitch : boolean = true;
  public divSize : number = 10;

  constructor(){
    this.username = "Samuel";
  }

  public onClickAddOne() : void{
    this.count++;
  }

  public onClickSwitchDisabled() : void{
    this.isSwitch = !this.isSwitch;
  }

  public onMouseEnterDoubleSize() : void{
    if(this.divSize < 512){
      this.divSize = this.divSize *2;
    }
    else{
      this.divSize = 10;
    }
  }
}
