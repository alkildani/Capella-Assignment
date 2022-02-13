import { Component, EventEmitter, Output } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";


import { EventService } from "../events/shared/event.service";

@Component({
    selector: 'search-bar',
    templateUrl: './search-bar.component.html'
})

export class SearchBarComponent {
    @Output() locations: EventEmitter<any> = new EventEmitter<any>()
    search: string = ''
    constructor(private eventService: EventService, private activatedRouter:ActivatedRoute, router:Router) {

    }

    searchEvent() {
        console.log(this.search)
        var l = this.eventService.getHotels(this.search).subscribe()
        console.log(l)
        this.locations.emit(l)

    }
}