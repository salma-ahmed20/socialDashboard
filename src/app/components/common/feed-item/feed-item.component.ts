import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss']
})
export class FeedItemComponent implements OnInit {
  @Input() feed: any;
  @Output() feedChange = new EventEmitter();

 inc(feed: any){
   this.feedChange.emit(feed);
 }
  constructor() { }

  ngOnInit(): void {
  }

 
}
