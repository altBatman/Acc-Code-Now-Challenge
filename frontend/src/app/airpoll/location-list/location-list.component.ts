import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  public airQualityList: IavgAirQualityData[] = [];
  public hasServerError: boolean;
  public serverErrorCode: number;
  public pageNumber: number;
  @Output() selected = new EventEmitter<void>();

  constructor(private airDataService: AirDataService) { }

  ngOnInit(): void {
    this.pageNumber = 1;
    this.getlistFromServer();
  }

  public getlistFromServer(): void{
    this.pageNumber = this.pageNumber+1;
    this.airDataService.getairdata(this.pageNumber).subscribe((data: IavgAirQualityData[])=>{
      this.hasServerError = false;
      this.airQualityList.push(...data);
    }, (error)=>{
      this.hasServerError = true;
      console.log(error);
    });
  }

  public selectedLocation(data: IavgAirQualityData){
    this.selected.emit();
    this.airDataService.selectedLocationData(data);
  }
}
