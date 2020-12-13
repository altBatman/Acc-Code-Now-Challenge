import { Injectable, HttpService, Param} from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class DataService {
    constructor(private http: HttpService){}

    async getAirqualityData(page){
        return await this.http.get(`https://api.openaq.org/beta/averages/?page=${page}`).pipe( map( (res)=>{
            return res.data[`results`];
        }));
    }
}
