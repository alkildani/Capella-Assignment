import { Routes } from "@angular/router";
import { HotelDetailsComponent } from "./events/event-details/hotel-details.component";
import { HotelsEventComponent } from "./events/hotels-event.component";

export const appRoutes = [
    { path: 'locations', component: HotelsEventComponent },
    { path: 'locations/:name', component: HotelDetailsComponent },
    { path: '', redirectTo: '/locations', pathMatch: 'full' },
]