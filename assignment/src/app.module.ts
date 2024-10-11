import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BikeModule } from './bike/bike.module';

// creating database connectivity
// using typeorm for sqlite connection

@Module({
  imports: [TypeOrmModule.forRoot({
    type:'sqlite',
    database: 'bikes.db',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true
  }), BikeModule]
})
export class AppModule {}
