import { Component, OnInit } from '@angular/core';
import { AirDataService } from 'src/app/shared/services/air-data.service';
import { IavgAirQualityData } from '../location-list/location-list.component';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'airpoll-location-data',
  templateUrl: './location-data.component.html',
  styleUrls: ['./location-data.component.css']
})
export class LocationDataComponent implements OnInit {
  public locationData : IavgAirQualityData;
  constructor(private airDataService: AirDataService) { }

  ngOnInit(): void {
    this.airDataService.cast.subscribe((data)=>{
      this.locationData = data;
    });
  }
}
