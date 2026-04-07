import { Injectable } from '@angular/core';
import { IStudent } from '../models/istudent';

@Injectable({
  providedIn: 'root',
})
export class Wad25 {

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

  public getStudents() : IStudent[]{
    return [...this._students];
  }

  public getStudent(id : number) : IStudent | undefined{
    return this._students.find(s => s.id === id);
  }

  public addStudent(studentName : string) : number{
    let ids : number[] = this._students.map(s => s.id);
    let idMax : number = Math.max(...ids) + 1;
    this._students.push({id : idMax, name : studentName});
    return idMax;
  }


}
