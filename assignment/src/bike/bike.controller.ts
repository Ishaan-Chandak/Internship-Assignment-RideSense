import { Controller, Get, Post, Put, Param, Delete, Body } from '@nestjs/common';
import { BikeService } from './bike.service';
import { CreateBikeDto } from './create-bike.dto';
import { UpdateBikeDto } from './update-bike.dto';
import { Bike } from './bike.entity';
import { ApiTags } from '@nestjs/swagger';

// defining all the paths for the bike feature

@ApiTags('bikes')
@Controller('bike')
export class BikeController {
    constructor(private readonly bikeService: BikeService){}

    @Get()
    findAll(){
        return this.bikeService.findAll()
    }

    @Post()
    create(@Body() createBikeDto: CreateBikeDto) : Promise<Bike> {
        return this.bikeService.create(createBikeDto)
    }

    @Put(':id')
    update(
        @Param('id') id: string,
        @Body() updateBikeDto: UpdateBikeDto,
    ): Promise<Bike> {
        return this.bikeService.update(id, updateBikeDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.bikeService.remove(id);
    }
}
