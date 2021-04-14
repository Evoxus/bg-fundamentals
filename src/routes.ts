import { Routes } from '@angular/router';
import { Error404Component } from './app/errors/404.component';
import { CreateEventComponent } from './app/event-components/create-event/create-event.component';
import { EventDetailsComponent } from "./app/event-components/event-details/event-details.component";
import { EventRoutActivator } from './app/event-components/event-details/event-route-activator.service';
import { EventsListComponent } from "./app/event-components/events-list/events-list.component";

export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRoutActivator] },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' }
]