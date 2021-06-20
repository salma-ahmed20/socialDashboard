import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss'],
})
export class FeedsComponent implements OnInit {
  types = [
    { id: 0, name: 'All' },
    { id: 1, name: 'Following' },
    { id: 2, name: 'Newest' },
    { id: 3, name: 'Popular' },
  ];
  feeds = [
    {
      id: 1,
      typeId: 2,
      name: 'Ashly Winchester',
      img: '../../../../assets/img/pic1.PNG',
      pImg: '../../../../assets/img/ashly.jpg',
      comments: 74,
      likes: 0,
    },
    {
      id: 2,
      typeId: 2,
      name: 'John Wick',
      img: '../../../../assets/img/pic2.PNG',
      pImg: '../../../../assets/img/john.jpg',
      comments: 24,
      likes: 0,
    },
    {
      id: 3,
      typeId: 2,
      name: 'Sydney White',
      img: '../../../../assets/img/pic3.PNG',
      pImg: '../../../../assets/img/Sydney.jpg',
      comments: 50,
      likes: 0,
    },
    {
      id: 4,
      typeId: 2,
      name: 'Jack Daswson',
      img: '../../../../assets/img/pic4.PNG',
      pImg: '../../../../assets/img/jack.jpg',
      comments: 20,
      likes: 0,
    },
    {
      id: 5,
      typeId: 1,
      name: 'John Wick',
      img: '../../../../assets/img/pic2.PNG',
      pImg: '../../../../assets/img/john.jpg',
      comments: 74,
      likes: 0,
    },
    {
      id: 6,
      typeId: 1,
      name: 'Taylor Swift',
      img: '../../../../assets/img/pic3.PNG',
      pImg: '../../../../assets/img/taylor.jpg',
      comments: 74,
      likes: 0,
    },
    {
      id: 7,
      typeId: 1,
      name: 'Jack Dawson',
      img: '../../../../assets/img/pic4.PNG',
      pImg: '../../../../assets/img/jack.jpg',
      comments: 74,
      likes: 0,
    },
    {
      id: 8,
      typeId: 1,
      name: 'Ashly Winchester',
      img: '../../../../assets/img/pic1.PNG',
      pImg: '../../../../assets/img/ashly.jpg',
      comments: 74,
      likes: 0,
    },
    {
      id: 9,
      typeId: 3,
      name: 'Ashly Winchester',
      img: '../../../../assets/img/pic1.PNG',
      pImg: '../../../../assets/img/ashly.jpg',
      comments: 74,
      likes: 0,
    },
    {
      id: 10,
      typeId: 3,
      name: 'Kelly klarson',
      img: '../../../../assets/img/pic3.PNG',
      pImg: '../../../../assets/img/kelly.jpg',
      comments: 74,
      likes: 0,
    },
    {
      id: 11,
      typeId: 3,
      name: 'John Wick',
      img: '../../../../assets/img/pic4.PNG',
      pImg: '../../../../assets/img/john.jpg',
      comments: 74,
      likes: 0,
    },
    {
      id: 12,
      typeId: 3,
      name: 'Sydney White',
      img: '../../../../assets/img/pic3.PNG',
      pImg: '../../../../assets/img/Sydney.jpg',
      comments: 74,
      likes: 0,
    },
  ];
  filteredP: any = [];
  activeFilter = 0;
  filter(type: any) {
    this.activeFilter = type.id;
    this.filteredP = this.feeds;
    if (this.activeFilter) {
      this.filteredP = this.feeds.filter((f) => f.typeId === type.id);
    }
    console.log(type);

    console.log(this.filteredP);
  }
  feedChangeItem(feed: any) {
    feed.likes++;
    localStorage.setItem('feeds', JSON.stringify(this.feeds));
  }
  constructor() {}

  ngOnInit(): void {
    this.filteredP = this.feeds;

    let localStoragefeeds: any = localStorage.getItem('feeds');
    if (localStoragefeeds !== null) {
      this.feeds = JSON.parse(localStoragefeeds);
    }
  }
}
