import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggest-item',
  templateUrl: './suggest-item.component.html',
  styleUrls: ['./suggest-item.component.scss']
})
export class SuggestItemComponent implements OnInit {
@Input() user:any

  constructor() { }

  ngOnInit(): void {
  }

}
