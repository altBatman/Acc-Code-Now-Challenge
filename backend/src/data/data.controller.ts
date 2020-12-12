import { Controller, Get, Logger, Param } from '@nestjs/common';
import { DataService } from './data.service';

@Controller('data')
export class DataController {
    private logger= new Logger('DataService');
    constructor(private dataService: DataService){}

    @Get()
    async getAllAverageData(){
        return await this.dataService.getAvgAirqualityData();
    }

    /* @Get()
    async getCountryAvg(@Param() countryID){
        this.logger.log('hello');
        return await this.dataService.getCountryAirqualityData(countryID[`country`]);
    } */
}
