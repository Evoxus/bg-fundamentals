import { Routes } from '@angular/router';
import { CreateEventComponent } from './app/event-components/create-event/create-event.component';
import { EventDetailsComponent } from "./app/event-components/event-details/event-details.component";
import { EventsListComponent } from "./app/event-components/events-list/events-list.component";

export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventComponent },
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EventDetailsComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' }
]