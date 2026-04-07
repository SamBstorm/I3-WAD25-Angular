import { Component, inject } from '@angular/core';
import { IStudent } from '../../../../shared/models/istudent';
import { Wad25 } from '../../../../shared/services/wad25';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-demo10-activiated-route-index',
  imports: [RouterLink],
  templateUrl: './demo10-activiated-route-index.html',
  styleUrl: './demo10-activiated-route-index.css',
})
export class Demo10ActiviatedRouteIndex {

  private _wadService : Wad25 = inject(Wad25);
  public students : IStudent[] = this._wadService.getStudents();

}
