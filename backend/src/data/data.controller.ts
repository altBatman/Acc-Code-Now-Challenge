import { Controller, Get, Logger, Param } from '@nestjs/common';
import { DataService } from './data.service';

@Controller('data')
export class DataController {
    private logger= new Logger('DataService');
    constructor(private dataService: DataService){}

    @Get(':page')
    getAllAverageData(@Param('page') page){
        return this.dataService.getAirqualityData(page);
    }
}
