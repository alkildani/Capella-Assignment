import { Component, Input } from "@angular/core";
import { EventService } from "../shared/event.service";

@Component({
    template: '<div><h1>{{location?.name}} hello</h1></div>'
})

export class HotelDetailsComponent{
    location:any 
    constructor(private eventService: EventService){
        
    }

    ngOnIniy(){
        this.location = this.eventService.getEvent(1);
    }
}