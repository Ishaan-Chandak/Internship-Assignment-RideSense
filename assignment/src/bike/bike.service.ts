import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
import { Bike } from './bike.entity';
import { CreateBikeDto } from './create-bike.dto';
import { UpdateBikeDto } from './update-bike.dto';

@Injectable()
export class BikeService {
    constructor(
        @InjectRepository(Bike)
        private bikeRepository: Repository<Bike> // instance of the repository Bike
    ){}

    // implementing the findAll functionality which will be used for the get operation
    // this returns a promise which can be then be used for error handling
    findAll() : Promise<Bike[]> {
        return this.bikeRepository.find()
    }

    // implementing the create functionality which will be used for the post operation
    // this returns a promise which can be then be used for error handling
    // in this we have the new bike DTO as the parameter
    // we create a bike variable which is based on the new bike dto which is recieved when we make the API call
    // at the end we save the new bike object in the DB
    create(createBikeDto: CreateBikeDto) : Promise<Bike> {
        const bike = this.bikeRepository.create(createBikeDto)
        return this.bikeRepository.save(bike)
    }

    // implementing the update functionality which will be used for the update operation
    // this returns a promise which can be then be used for error handling
    // in this we update the value of a bike already present in the db
    // we take in the id of the bike as the parameter and also the newer bike DTO
    // now we first use the findOneBy function which searches the db based on the primary key id
    // if we dont find any we throw an exception
    // else we use the spread operator to transfer the newer details to the already stored value
    async update(id: string, updateBikeDto: UpdateBikeDto): Promise<Bike> {
        const updatedBike = await this.bikeRepository.findOneBy({ id });
        if (!updatedBike) {
            throw new NotFoundException(`Bike with ID ${id} not found`);
        }
        const { make, model, type, year } = updateBikeDto;
        Object.assign(updatedBike, { make, model, type, year });
        return this.bikeRepository.save(updatedBike);
    }
    
    // this is used to implement the delete operation
    // returns a promise again for error handling purposes
    // here if delete operation does not affect any row then we can conclude that the value does not exist
    async remove(id: string): Promise<void> {
        const result = await this.bikeRepository.delete(id);
        if (result.affected === 0) {
          throw new NotFoundException(`Bike with ID ${id} not found`);
        }
    } 
}
