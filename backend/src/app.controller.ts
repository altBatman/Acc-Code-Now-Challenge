import { Controller, Get, HttpService, Logger, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { map } from 'rxjs/operators'

@Controller()
export class AppController {

  public logger = new Logger('Applogger');
  constructor(private readonly appService: AppService, private http: HttpService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('old')
  world(): string {
    return this.appService.getHello();
  }

  @Get('new/:country')
  async getNew(@Param('country') payload){
    return await this.http.get('https://api.openaq.org/beta/averages/').pipe( map( (res)=>{
      this.logger.log(payload);
      return res.data[`meta`];
    }));
  }
}
