import { Component } from '@angular/core';
import { NgStyle, NgClass } from "@angular/common";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo04-directives',
  imports: [NgStyle, NgClass, FormsModule],
  templateUrl: './demo04-directives.html',
  styleUrl: './demo04-directives.css',
})
export class Demo04Directives {

  public circleStyle : any = {
    border : '2px solid blue',
    backgroundColor : 'red',
    borderRadius : '50%',
    height : '64px',
    width : '64px'
  };

  public isCircle : boolean = false;

  public userData : any = {
    username : "Samuel",
    pets : []
  };

  public animalName? :string;

  public onClickToggleCircle() : void{
    this.isCircle = !this.isCircle;
  }

  public onClickAddAnimal(){
    if(!this.animalName) throw Error('Il manque un nom...');
    this.userData.pets.push(this.animalName);
    this.animalName = undefined;
  }
}
