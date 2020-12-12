import { Controller, Get, Param } from '@nestjs/common';
import { DataService } from './data.service';

@Controller('data')
export class DataController {
    constructor(private dataService: DataService){}

    @Get()
    async getAllAverageData(){
        return await this.dataService.getAvgAirqualityData();
    }

    @Get(':country')
    async getCountryAvg(@Param('country') countryID){
        return await this.dataService.getCountryAirqualityData(countryID);
    }
}
