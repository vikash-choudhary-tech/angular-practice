import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() name : any;
  @Input() gender : any;
  @Input() age : any;

  constructor() { }

  ngOnInit(): void {
  }

}
