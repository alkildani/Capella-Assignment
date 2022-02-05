import { Component, OnInit } from "@angular/core";
import { EventService } from "./shared/event.service";

@Component({

    template: `
    <h1 style="text-align: center; color:white;">Book a Hotel...</h1>

    <search-bar (locations)="setLocations($event)"></search-bar>
        <div class="row" *ngIf="locations.length > 0">
            <div *ngFor="let location of locations" class="col-md-12">
                <hotel-thumbnail  [location]="location"></hotel-thumbnail>
            </div>
        </div>
        <div *ngIf="locations.length==0 ">
            <h1 style="color: white; text-align:center;"><em>please enter the location</em></h1>
        </div>
    `,
})

export class HotelsEventComponent {
    locations: any[] = []
    constructor(private eventService: EventService) {

    }



    // ngOnInit() {
    //     this.locations = this.eventService.getEvents()
    // }

    setLocations(e: any) {
        this.locations = e;
    }
}