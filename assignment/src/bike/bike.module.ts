import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm"
import { BikeService } from './bike.service';
import { BikeController } from './bike.controller';
import { Bike } from './bike.entity';

// creation of the bike module so that we can implement this feature with ease
// separating the services and the controller helps in better code 

@Module({
  imports: [TypeOrmModule.forFeature([Bike])],
  controllers: [BikeController],
  providers: [BikeService]
})
export class BikeModule {}
