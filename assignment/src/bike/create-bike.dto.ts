import { IsString, IsNumber } from 'class-validator';

// Create Bike DTO which basically consist of the DTO necessary when we will create a new bike
// The data will arrive in this format through the API

export class CreateBikeDto {
  @IsString()
  make!: string;

  @IsString()
  model!: string;

  @IsNumber()
  year!: number;

  @IsString()
  type!: string;
}
