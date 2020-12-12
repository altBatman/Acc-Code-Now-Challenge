import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataController } from './data/data.controller';
import { DataService } from './data/data.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, DataController],
  providers: [AppService, DataService],
})
export class AppModule {}
