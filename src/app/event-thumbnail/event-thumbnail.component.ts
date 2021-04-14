import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

  constructor() { }
  
  @Input() eventData: any
  @Output() eventClick = new EventEmitter()

  ngOnInit(): void {
  }

  getStartTimeClass(): {green: boolean, bold: boolean} {
    const isEarlyStart = this.eventData && this.eventData.time === '8:00 am';
    return {green: isEarlyStart, bold: isEarlyStart};
  }

}
