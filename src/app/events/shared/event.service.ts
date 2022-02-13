import { Injectable } from "@angular/core"
import {HttpClient} from "@angular/common/http"

@Injectable()
export class EventService {

    locations: any
    constructor (private Http:HttpClient){
        
    }
    GetAllLocations() {
       return this.Http.get("https://localhost:44306/api/Hotels/location")
        
    }
    
    getLocations() {
        return this.locations
        //this.Http.get("https://localhost:44306/api/hotels/location")
    }

    getHotels(name: string) {

        //return LOCATIONS.filter(location => location.location.toLowerCase() === name.toLowerCase())
        return this.Http.get("https://localhost:44306/api/Hotels/location" + location)
    }
}
export class Location {
    public id: number = 0
    public locationName: string = ''
    public hotels: Hotel[] = []

    constructor() {

    }
}

export class Hotel {

}
// const LOCATIONS =
//     [
//         {
//             id: 1,
//             location: 'Dead Sea',
//             hotels:
//                 [
//                     {
//                         id: 1,
//                         name: 'Hilton Dead Sea',
//                         rate: 'non',
//                         price: 60,
//                         description: 'Located in Sowayma, 8 mi from Bethany Beyond the Jordan, Hilton Dead Sea Resort & Spa features a fitness center and a private beach area.',
//                         imageURL: 'app/src/assets/images/helton-dead-sea.jpg',
//                         numOfStars: '4',
//                     },
//                     {
//                         id: 2,
//                         name: 'Dead Sea Marriott Resort ',
//                         rate: 8.5,
//                         price: 100,
//                         description: 'This Marriott Dead Sea Resort & Spa, on the shores of the mineral-rich Dead Sea is set against the backdrop of rugged mountains. It features saltwater and freshwater pools, whirlpools and saunas.',
//                         imageURL: '',
//                         numOfStars: '5',
//                     }
//                 ]
//         },
//         {
//             id: 2,
//             location: 'Aqaba',
//             hotels: [
//                 {
//                     id: 1,
//                     name: 'Golden Tulip Aqaba',
//                     rate: 7.9,
//                     price: 80,
//                     description: `Standard King Room
//                             1 queen bed
//                             Breakfast included
//                             Only 6 rooms left at this price on our site`,
//                     imageURL: '',
//                     numOfStars: '5',
//                 },
//                 {
//                     id: 2,
//                     name: 'Days Inn Hotel & Suites, Aqaba',
//                     rate: 7.4,
//                     price: 42,
//                     description: `'Standard King Room
//                             1 king bed
//                             Breakfast included
//                             Only 3 rooms left at this price on our site'`,
//                     imageURL: '',
//                     numOfStars: '4',
//                 },
//             ]
//         }
//     ]