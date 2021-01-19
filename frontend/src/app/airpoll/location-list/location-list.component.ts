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
  public loading: boolean;
  selector = '.box';
  @Output() selected = new EventEmitter<void>();

  constructor(private airDataService: AirDataService) { }

  ngOnInit(): void {
    this.loading = true;
    this.pageNumber = 0;
    this.getlistFromServer();
  }

  public getlistFromServer(): void{
    this.loading = true;
    this.pageNumber = this.pageNumber+1;
    this.airDataService.getairdata(this.pageNumber).subscribe((data: IavgAirQualityData[])=>{
      this.loading = false;
      this.hasServerError = false;
      this.airQualityList.push(...data);
    }, (error)=>{
      this.hasServerError = true;
      this.loading = false;
    });
  }

  public selectedLocation(data: IavgAirQualityData){
    this.selected.emit();
    this.airDataService.selectedLocationData(data);
  }
}
