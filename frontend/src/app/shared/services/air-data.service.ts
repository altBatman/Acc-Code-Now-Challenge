import { Injectable } from '@angular/core'
import{ HttpClient } from '@angular/common/http'
import { Observable, Subject } from 'rxjs';
import { IavgAirQualityData } from 'src/app/airpoll/location-list/location-list.component';

@Injectable({providedIn: 'root'})

export class AirDataService {

    public selectedLocation= new Subject<IavgAirQualityData>();

    constructor(private http: HttpClient){}

    getairdata(): Observable<any>{
        return this.http.get('/api/data', {responseType: 'json'});
    }
}