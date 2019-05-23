import { Component, OnInit } from '@angular/core';
import { LocationsService } from '../services/locations.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {
  locations:any[];

  constructor(locationsService: LocationsService) {
    locationsService.getLocations().subscribe(res => {
      console.log(res);
      this.locations = res;
    }, err =>{
      console.log(err);


    } )
    
    
  }

  ngOnInit() {
  }

}
