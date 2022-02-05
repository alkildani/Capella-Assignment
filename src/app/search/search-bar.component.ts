import { Component, EventEmitter, Output } from "@angular/core";

import { EventService } from "../events/shared/event.service";

@Component({
    selector: 'search-bar',
    templateUrl: './search-bar.component.html'
})

export class SearchBarComponent {
    @Output() locations: EventEmitter<any> = new EventEmitter<any>()
    search: string = ''
    constructor(private eventService: EventService) {

    }

    searchEvent() {
        console.log(this.search)
        var l = this.eventService.getEvent(this.search)
        console.log(l)
        this.locations.emit(l)

    }
}