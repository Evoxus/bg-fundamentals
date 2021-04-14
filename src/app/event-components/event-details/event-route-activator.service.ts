import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { EventService } from 'src/app/shared/event.service';

@Injectable({
  providedIn: 'root'
})
export class EventRoutActivator implements CanActivate {
  constructor(
    private eventService: EventService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot) {
    const eventExists = !!this.eventService.getEventById(+route.params['id']);

    if(!eventExists) {
      this.router.navigate(['/404']);
    }
    return eventExists;
  }
}