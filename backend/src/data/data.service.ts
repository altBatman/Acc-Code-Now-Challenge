import { Injectable, HttpService, Param} from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class DataService {
    constructor(private http: HttpService){}

    async getAvgAirqualityData(){
        return await this.http.get('https://api.openaq.org/beta/averages/').pipe( map( (res)=>{
            return res.data[`results`];
        }));
    }

    async getCountryAirqualityData(country){
        return await this.http.get(`https://api.openaq.org/beta/averages/?country=${country}`).pipe( map( (res)=>{
            return res.data[`results`];
        }));
    }
}
