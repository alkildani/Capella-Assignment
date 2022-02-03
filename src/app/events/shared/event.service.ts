import { Injectable } from "@angular/core"

@Injectable()
export class EventService{
    getEvents(){
        return LOCATIONS
    }

    getEvent(id:number){
        return LOCATIONS.find(location => location.id === id)
    }
}

const LOCATIONS = 
            [ 
                {
                    id:1,
                    location: 'DeadSea',
                    hotels:
                        [ 
                            {
                                id: 1,
                                name: 'Hilton Dead Sea',
                                rate: 7.8,
                                price: 60,
                                description: 'Located in Sowayma, 8 mi from Bethany Beyond the Jordan, Hilton Dead Sea Resort & Spa features a fitness center and a private beach area.',
                                imageURL: 'app/src/assets/images/helton-dead-sea.jpg',
                            },
                            {
                                id: 2,
                                name: 'Dead Sea Marriott Resort & SpaOpens in new window',
                                rate: 8.5,
                                price: 100,
                                description: 'This Marriott Dead Sea Resort & Spa, on the shores of the mineral-rich Dead Sea is set against the backdrop of rugged mountains. It features saltwater and freshwater pools, whirlpools and saunas.',
                                imageURL: '',
                            }
                        ]
                },
                {
                    id: 2,
                    location: 'aqaba',
                    hotels:[
                        {
                            id: 1,
                            name: 'Golden Tulip AqabaOpens in new window',
                            rate: 7.9,
                            price: 80,
                            description: `'Standard King Room
                            1 queen bed
                            Breakfast included
                            Only 6 rooms left at this price on our site'`,
                            imageURL: '',
                        },
                        {
                            id: 2,
                            name: 'Days Inn Hotel & Suites, AqabaOpens in new window',
                            rate: 7.4,
                            price: 42,
                            description: `'Standard King Room
                            1 king bed
                            Breakfast included
                            Only 3 rooms left at this price on our site'`,
                            imageURL: '',
                        },
                    ]
                }        
            ]