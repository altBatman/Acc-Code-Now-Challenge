import { Injectable } from '@angular/core'
import{ HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { IavgAirQualityData } from 'src/app/airpoll/location-list/location-list.component';

@Injectable({providedIn: 'root'})

export class AirDataService {

    private selectedLocation= new BehaviorSubject<IavgAirQualityData>(null);
    cast = this.selectedLocation.asObservable();

    constructor(private http: HttpClient){}

    getairdata(page): Observable<any>{
        return this.http.get(`/api/data/${page}`, {responseType: 'json'});
    }
    selectedLocationData(data: IavgAirQualityData): void{
        this.selectedLocation.next(data);
    }
}