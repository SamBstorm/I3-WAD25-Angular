import { Injectable } from '@angular/core';
import { IStudent } from '../models/istudent';
import { BehaviorSubject, filter, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Formation {

  private _students : IStudent[] = [
    { id : 1, name : 'Yuliia' },
    { id : 2, name : 'Chuong' },
    { id : 3, name : 'Anaïs' },
    { id : 4, name : 'Orsula' },
    { id : 5, name : 'Akwa' },
    { id : 6, name : 'Chloé' },
    { id : 7, name : 'Anisoara' },
    { id : 8, name : 'Sahar' },
  ];

  public students : BehaviorSubject<IStudent[]> = new BehaviorSubject<IStudent[]>(this._students);
  
  public addStudent(studentName : string) : number{
    let ids : number[] = this._students.map(s => s.id);
    let idMax : number = Math.max(...ids) + 1;
    this._students.push({id : idMax, name : studentName});
    this.students.next(this._students);
    return idMax;
  }

  public getStudent(id : number) : Observable<IStudent | undefined>{
    return this.students.pipe(map(studs => studs.find(s => s.id == id)));
  }

  public getStudentNames() : Observable<string[]>{
    return this.students.pipe(map(studs => studs.map(s => s.name)));
  }

}
