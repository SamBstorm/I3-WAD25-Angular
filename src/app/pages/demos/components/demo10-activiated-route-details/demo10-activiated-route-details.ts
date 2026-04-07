import { Component, inject, OnInit } from '@angular/core';
import { Wad25 } from '../../../../shared/services/wad25';
import { IStudent } from '../../../../shared/models/istudent';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-demo10-activiated-route-details',
  imports: [],
  templateUrl: './demo10-activiated-route-details.html',
  styleUrl: './demo10-activiated-route-details.css',
})
export class Demo10ActiviatedRouteDetails implements OnInit {
  
  private _wadService : Wad25 = inject(Wad25);
  private _actRoute : ActivatedRoute = inject(ActivatedRoute);
  private _router : Router = inject(Router);
  
  public student? : IStudent;
  
  ngOnInit(): void {
    let paramId = this._actRoute.snapshot.paramMap.get('id');
    if(paramId){
      let id = parseInt(paramId);
      if(!isNaN(id)){
        this.student = this._wadService.getStudent(id);
        if(!this.student){
          this._router.navigateByUrl('/demos/activatedRoute-index');
        }
      } 
    }
  }

}
