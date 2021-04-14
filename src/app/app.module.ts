import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventThumbnailComponent } from './event-thumbnail/event-thumbnail.component';
import { NavComponent } from './nav/nav.component';
import { EventService } from './shared/event.service';
import { ToastrService } from './shared/toastr.service';
import { EventDetailsComponent } from './event-details/event-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavComponent,
    EventDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    EventService,
    ToastrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
