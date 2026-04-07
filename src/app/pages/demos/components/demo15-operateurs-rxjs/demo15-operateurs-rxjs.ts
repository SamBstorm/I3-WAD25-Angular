import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Formation } from '../../../../shared/services/formation';
import { IStudent } from '../../../../shared/models/istudent';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo15-operateurs-rxjs',
  imports: [FormsModule],
  templateUrl: './demo15-operateurs-rxjs.html',
  styleUrl: './demo15-operateurs-rxjs.css',
})
export class Demo15OperateursRxjs implements OnInit, OnDestroy{
  
  private _formService : Formation = inject(Formation);
  private _subs : Subscription[] = [];
  
  public students : IStudent[] = [];
  public studentNames : string[] = [];
  public student? : IStudent;
  
  public id : number = 1;
  public studentName? : string;
  
  ngOnInit(): void {
    this._subs.push(
      this._formService.students.subscribe({
        next : (datas) => this.students = datas,
        error : (err) => console.error(err)
      })
    );
    this._subs.push(
      this._formService.getStudentNames().subscribe({
        next : (datas) => this.studentNames = datas,
        error : (err) => console.error(err)
      })
    );
  }

  ngOnDestroy(): void {
    this._subs.forEach(s => s.unsubscribe());
  }

  public onAdd():void{
    if(this.studentName){
      this._formService.addStudent(this.studentName);
      this.studentName = undefined;
    }
  }

}
