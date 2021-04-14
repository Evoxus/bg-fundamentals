import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../shared/event.service';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event: any = {}

  constructor(
    private eventsService: EventService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.event = this.eventsService.getEventById(
      +this.route.snapshot.params['id']
    );
  }

}
