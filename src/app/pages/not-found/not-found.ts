import { Component, inject, OnInit, WritableSignal, signal } from '@angular/core';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css',
})
export class NotFound implements OnInit{

  private _router : Router = inject(Router);
  public count : WritableSignal<number> = signal(0);
  private intervalId? : number;

  ngOnInit(): void {
    this.intervalId = setInterval(()=>this.countDown(), 1000);
  }

  private countDown(){
      this.count.update(value => value+ 1);
      if(this.count() == 10){
        clearInterval(this.intervalId);
        // this._router.navigate(['/home']);
        this._router.navigateByUrl('/home');
      }
    }
}
