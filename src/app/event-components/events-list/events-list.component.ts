import { Component, OnInit } from '@angular/core';
import { EventService } from '../../shared/event.service';
import { ToastrService } from '../../shared/toastr.service';

declare let toastr: any

@Component({
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  eventData: any[] = [];

  constructor(
    private eventsService: EventService,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.eventData = this.eventsService.getEvents();
  }

  handleThumbnailClick(eventName: string): void {
    this.toastr.success(eventName)
  }

}
