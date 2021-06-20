import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  users = [
    { id: 1, name: 'Sydney', img: '../../../../assets/img/Sydney.jpg' },
    { id: 2, name: 'John', img: '../../../../assets/img/john.jpg' },
    { id: 3, name: 'Taylor', img: '../../../../assets/img/taylor.jpg' },
    { id: 4, name: 'Kelly', img: '../../../../assets/img/kelly.jpg' },
    { id: 5, name: 'Jack', img: '../../../../assets/img/jack.jpg' },
    { id: 6, name: 'Ashly', img: '../../../../assets/img/ashly.jpg' },
    { id: 7, name: 'Christian', img: '../../../../assets/img/christian.jpg' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
