import { Component, signal, WritableSignal } from '@angular/core';
import { TimerPipe } from '../../../../shared/pipes/timer-pipe';

@Component({
  selector: 'app-exo02-chrono',
  imports: [TimerPipe],
  templateUrl: './exo02-chrono.html',
  styleUrl: './exo02-chrono.css',
})
export class Exo02Chrono {
  public chrono : WritableSignal<number> = signal(0);
  public interval? : number;

  public onClickStart(): void{
    if(this.interval) throw new Error('Chrono déjà en cours...');
    this.interval = setInterval(
      () => {
        /* au lieu du signal.update()
        let timer : number = this.chrono();
        this.chrono.set(timer+1);
        */
        this.chrono.update(timer => timer+1);
      },
      1000
    );
  }

  public onClickPause(): void{    
    if(!this.interval) throw new Error('Pas de chrono initialisé...');
    clearInterval(this.interval);
    this.interval = undefined;
  }

  public onClickReset(): void{
    this.chrono.set(0);
  }
}
