import { DatePipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { HtmlListPipe } from '../../../../shared/pipes/html-list-pipe';

@Component({
  selector: 'app-demo03-pipes',
  imports: [DatePipe,
      UpperCasePipe,
      LowerCasePipe,
      HtmlListPipe
    ],
  templateUrl: './demo03-pipes.html',
  styleUrl: './demo03-pipes.css',
})
export class Demo03Pipes {

  public title : string = 'Les pipes';
  public today : Date = new Date();
  public students : string[] = [
    'Yuliia',
    'Laura',
    'Chuong',
    'Sihame',
    'Anaïs',
    'Orsula',
    'Akwa',
    'Chloé',
    'Ceren',
    'Ayla',
    'Karima',
    'Annie',
    'Sahar'
  ];
}
