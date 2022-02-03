import { Component, Input } from "@angular/core";

@Component({
    selector: 'hotel-thumbnail',
    template: `

            <div class="card">
                <h4 style="text-align: center;">{{location?.location}}</h4>
                <img src="/assets/images/helton-dead-sea.jpg" alt=""/>
                <!-- <h2>{{location?.hotels?.name}}</h2>
                <h6 class="discription">Discription: <br>{{location?.hotels?.description}}</h6> -->
                
                <div class="info" style="">
                    <!-- <h6 class="data"> Rate: {{location?.hotels?.rate}}</h6>
                    <h6 class="data"> Price: {{location?.hotels?.price}}</h6> -->
                    <h6 class="data"> id: {{location?.id}}</h6>
                    <h6 class="data"> name: {{location?.location}}</h6>
                </div>

            </div>
            
            
       
    `,

    styles: [`

        .card{
            background-color: whitesmoke;
            overflow: hidden;
            cursor: pointer;
            min-height: 200px;
            /* background-color: rgb(0,0,0,.0);
            border: black solid; */
            border: black solid 1px;
            margin-left: 50px;
            margin-bottom: 50px;
           
        
        }

        .discription{
            width: 300px;
            
        }

        img{
        
            width: 108.5%;
            margin-left:-15px;
            max-height: 180px;
        }

        .data{
            display: inline;
            width:100%;
            height: 10px;

        }

        .info{
            background-color: yellow; 
            width: 110%; 
            margin-left:0px; 
            height:30px
        }

    
    `]
})

export class EventThumbnailComponent {
    @Input() location: any
}