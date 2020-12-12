import { Component, OnInit } from '@angular/core';
import { AirDataService } from 'src/app/shared/services/air-data.service';

export interface IavgAirQualityData {
    country: string;
    city: string;
    location: string;
    parameter: string;
    date: number;
    average: number;
    measurement_count: number;
    unit: string;
    coordinates: {
      latitude : number;
      longitude: number;
    };
}

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'airpoll-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {
  public airQualityList: IavgAirQualityData[];
  public hasServerError: boolean;
  public serverErrorCode: number;

  constructor(private airDataService: AirDataService) { }

  ngOnInit(): void {
    this.getlistFromServer();
  }

  private getlistFromServer(): void{
    this.airDataService.getairdata().subscribe((data: IavgAirQualityData[])=>{
      this.hasServerError = false;
      this.airQualityList = data;
    }, (error)=>{
      this.hasServerError = true;
      console.log(error.status);
    });
  }

  public selectedLocation(index: number){
    this.airDataService.selectedLocation.next(this.airQualityList[index]);
  }
}
