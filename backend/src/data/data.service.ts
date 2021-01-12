import { Injectable, HttpService, Param, HttpException} from '@nestjs/common';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class DataService {
    constructor(private http: HttpService){}

    getAirqualityData(page){
        return this.http.get(`https://api.openaq.org/beta/averages/?page=${page}`)
        .pipe(
            catchError(e => {
                console.log(e.response.statusText, e.response.status);
                throw new HttpException(e.response.message, e.response.status);
              }),
            map( (res)=>{
                return res.data[`results`];
            })
        );
    }
}
