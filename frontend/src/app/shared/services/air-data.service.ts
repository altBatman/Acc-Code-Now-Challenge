import { Injectable } from '@angular/core'
import{ HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})

export class AirDataService {

    constructor(private http: HttpClient){}
    getairdata(): Observable<any>{
        return this.http.get('/api/data/BA', {responseType: 'json'});
    }
}