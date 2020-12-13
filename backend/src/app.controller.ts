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
  
}
