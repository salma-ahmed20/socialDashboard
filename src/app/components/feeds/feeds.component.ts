import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss'],
})
export class FeedsComponent implements OnInit {
 

  feeds = [
    { id: 1, name: 'Ashly Winchester',img: '../../../../assets/img/pic1.PNG',pImg: '../../../../assets/img/ashly.jpg',comments:74,likes: 0 },
    { id: 2, name: 'John Wick',img: '../../../../assets/img/pic2.PNG',pImg: '../../../../assets/img/john.jpg' ,comments:24,likes: 0 },
    { id: 3, name: 'Sydney White',img: '../../../../assets/img/pic3.PNG',pImg: '../../../../assets/img/Sydney.jpg',comments:50, likes: 0 },
    { id: 4, name: 'Jack Daswson',img: '../../../../assets/img/pic4.PNG',pImg: '../../../../assets/img/jack.jpg',comments:20, likes: 0 },
  ];
  feedChangeItem(feed: any) {
    feed.likes++;
    localStorage.setItem('feeds', JSON.stringify(this.feeds));
  }
  constructor() {}

  ngOnInit(): void {
    let localStoragefeeds: any = localStorage.getItem('feeds');
    if (localStoragefeeds !== null) {
      this.feeds = JSON.parse(localStoragefeeds);
    }
   }
}
