import { Component, HostListener, Input, OnInit } from "@angular/core";
import { EventService } from "../shared/event.service";

@Component({
    selector: 'hotel-details',
    templateUrl: './hotel-details.component.html',
    styles: [`
    
    .card{
            background-color: whitesmoke;
            overflow: hidden;
            min-height: 250px;
            /* background-color: rgb(0,0,0,.0);
            border: black solid; */
            border: black solid 1px;
            /* margin-left: 50px; */
            margin-bottom: 50px;
            /* margin-left: 30%; */
            box-shadow: 3px 7px black;
            border-radius: 70px 0px 70px 0px;
        
        }

        .hotelName{
            text-align: center;
            border-bottom: 2px solid #181818;
            cursor: pointer;
        }

        .discription{
            width: 400px;
            float:left;
            overflow:hidden;
            margin-left: 5px;
            border-left: 4px solid #000080;
            padding-left: 4px;
        }

        img{
        
            width: 33.5%;
            margin-left:-15px;
            margin-top: -5px;
            height: 200px;
            float:left;
            overflow:hidden;
        }

        .data{
            display: block;
            width:110%;
            height: 10px;
            text-align: center;
            /* overflow:hidden; */
            
        }

        .info{
            /* width: 20%;  */
            margin-right:15px; 
            height:30px;
            float:right;
            height: 160px;
            border-left: 4px solid red;
            overflow:hidden;
            
        }

        

        #rate{
            height: 50px;
            width: 50px;
            background:#000080;
            margin:auto;
            margin-bottom: 70px;
            /* margin-right: 80px; */
            padding-top: 5px; 
            border-radius: 10px 10px 10px 0px;
            
        }
        .rateSpan{
            font-weight: bold;
            display:block;
            width: 100px;
            margin:auto;
            margin-right: 30px;
            margin-top: 30px;
        }

        #myBtn {
    display: none; /* Hidden by default */
    position: fixed; /* Fixed/sticky position */
    bottom: 20px; /* Place the button at the bottom of the page */
    right: 30px; /* Place the button 30px from the right */
    z-index: 99; /* Make sure it does not overlap */
    border: none; /* Remove borders */
    outline: none; /* Remove outline */
    background-color: #000080; /* Set a background color */
    color: white; /* Text color */
    cursor: pointer; /* Add a mouse pointer on hover */
    padding: 0px; /* Some padding */
    border-radius: 10px; /* Rounded corners */
    font-size: 18px; /* Increase font size */
}

#myBtn:hover {
    background-color: #555; /* Add a dark-grey background on hover */
    height: 40px;
} 

#myBtn:active {
    background-color: #888
}

.card:hover{
    box-shadow: 8px 12px black;
    min-height: 255px;
    min-width: 850px;

}
    
    `]
})

export class HotelDetailsComponent implements OnInit {

    @Input() location: any
    constructor(private eventService: EventService) {

    }

    ngOnInit() {


        console.log(this.location)
    }

    @HostListener("window:scroll", []) onWindowScroll() {
        this.scrollFunction();
    }
    // When the user scrolls down 20px from the top of the document, show the button
    scrollFunction() {
        if (document.documentElement.scrollTop > 20) {
            document.getElementById("myBtn")!.style.display = "block";
        } else {
            document.getElementById("myBtn")!.style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
}