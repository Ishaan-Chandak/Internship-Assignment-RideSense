"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bike_entity_1 = require("./bike.entity");
let BikeService = class BikeService {
    constructor(bikeRepository // instance of the repository Bike
    ) {
        this.bikeRepository = bikeRepository;
    }
    // implementing the findAll functionality which will be used for the get operation
    // this returns a promise which can be then be used for error handling
    findAll() {
        return this.bikeRepository.find();
    }
    // implementing the create functionality which will be used for the post operation
    // this returns a promise which can be then be used for error handling
    // in this we have the new bike DTO as the parameter
    // we create a bike variable which is based on the new bike dto which is recieved when we make the API call
    // at the end we save the new bike object in the DB
    create(createBikeDto) {
        const bike = this.bikeRepository.create(createBikeDto);
        return this.bikeRepository.save(bike);
    }
    // implementing the update functionality which will be used for the update operation
    // this returns a promise which can be then be used for error handling
    // in this we update the value of a bike already present in the db
    // we take in the id of the bike as the parameter and also the newer bike DTO
    // now we first use the findOneBy function which searches the db based on the primary key id
    // if we dont find any we throw an exception
    // else we use the spread operator to transfer the newer details to the already stored value
    async update(id, updateBikeDto) {
        const updatedBike = await this.bikeRepository.findOneBy({ id });
        if (!updatedBike) {
            throw new common_1.NotFoundException(`Bike with ID ${id} not found`);
        }
        const { make, model, type, year } = updateBikeDto;
        Object.assign(updatedBike, { make, model, type, year });
        return this.bikeRepository.save(updatedBike);
    }
    // this is used to implement the delete operation
    // returns a promise again for error handling purposes
    // here if delete operation does not affect any row then we can conclude that the value does not exist
    async remove(id) {
        const result = await this.bikeRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Bike with ID ${id} not found`);
        }
    }
};
exports.BikeService = BikeService;
exports.BikeService = BikeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(bike_entity_1.Bike)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BikeService);
//# sourceMappingURL=bike.service.js.map