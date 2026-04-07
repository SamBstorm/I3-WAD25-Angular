import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { SubService } from '../../../../shared/services/sub-service';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-demo13-subjects',
  imports: [FormsModule],
  templateUrl: './demo13-subjects.html',
  styleUrl: './demo13-subjects.css',
})
export class Demo13Subjects implements OnInit, OnDestroy {
  
  private _subService : SubService = inject(SubService);
  private _sub! : Subscription;
  
  public currentText? : string;
  
  ngOnInit(): void {
    this._sub = this._subService.myText.subscribe({
      next : (value) => this.currentText = value,
      error: (err) => console.error(err)
    });
  }

  ngOnDestroy(): void {
    console.log(this._sub);
    this._sub.unsubscribe();
    console.log(this._sub);
  }

  public onSave():void{
    if(this.currentText){
      this._subService.changeText(this.currentText);
    }
    else{
      this._subService.clearText();
    }
  }

  public onReverse() : void{
    if(this.currentText){
      let invertedText = this.currentText.split('').reverse().join('');
      this._subService.changeText(invertedText);
    }
  }
}
