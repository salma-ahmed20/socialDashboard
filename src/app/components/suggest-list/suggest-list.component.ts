import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggest-list',
  templateUrl: './suggest-list.component.html',
  styleUrls: ['./suggest-list.component.scss']
})
export class SuggestListComponent implements OnInit {
  users = [
    { id: 1, name: 'Sydney White',neckName:'@dr.syd', img: '../../../../assets/img/Sydney.jpg',isFollowed:false },
    { id: 2, name: 'John Wick',neckName:'@johneyy', img: '../../../../assets/img/john.jpg',isFollowed:true  },
    { id: 3, name: 'Taylor Swift',neckName:'@art.tal', img: '../../../../assets/img/taylor.jpg',isFollowed:false  },
   
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
