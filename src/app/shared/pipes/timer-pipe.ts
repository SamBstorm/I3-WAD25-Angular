import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timer',
})
export class TimerPipe implements PipeTransform {
  transform(value: number): string {
    let minutes : number = Math.floor(value / 60);
    let secondes : number = value % 60;
    return `${minutes} minute${minutes>1?'s':''} ${secondes} seconde${secondes>1?'s':''}`;
  }
}
