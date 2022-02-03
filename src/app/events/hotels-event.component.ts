import { Component, OnInit } from "@angular/core";
import { EventService } from "./shared/event.service";

@Component({
    
    template:`
        <div class="row">
            <div *ngFor="let location of locations" class="col-md-5">
                <hotel-thumbnail  [location]="location"></hotel-thumbnail>
            </div>
        </div>
    `,
})

export class HotelsEventComponent  implements OnInit
{
    locations:any[] | undefined
    constructor(private eventService: EventService){
        
    } 
        
    ngOnInit() {
        this.locations = this.eventService.getEvents()
    }
}