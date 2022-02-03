import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { SearchBarComponent } from './search/search-bar.component';
import { HotelsEventComponent } from './events/hotels-event.component';
import { EventThumbnailComponent } from './events/holtel-thumbnail.component';
import { EventService } from './events/shared/event.service';
import { HotelDetailsComponent } from './events/event-details/hotel-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    HotelsEventComponent,
    EventThumbnailComponent,
    HotelDetailsComponent,
  ],
  imports: [
    BrowserModule,

    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [
    EventService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
