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
exports.BikeController = void 0;
const common_1 = require("@nestjs/common");
const bike_service_1 = require("./bike.service");
const create_bike_dto_1 = require("./create-bike.dto");
const update_bike_dto_1 = require("./update-bike.dto");
const swagger_1 = require("@nestjs/swagger");
let BikeController = class BikeController {
    constructor(bikeService) {
        this.bikeService = bikeService;
    }
    findAll() {
        return this.bikeService.findAll();
    }
    create(createBikeDto) {
        return this.bikeService.create(createBikeDto);
    }
    update(id, updateBikeDto) {
        return this.bikeService.update(id, updateBikeDto);
    }
    remove(id) {
        return this.bikeService.remove(id);
    }
};
exports.BikeController = BikeController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BikeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_bike_dto_1.CreateBikeDto]),
    __metadata("design:returntype", Promise)
], BikeController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_bike_dto_1.UpdateBikeDto]),
    __metadata("design:returntype", Promise)
], BikeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BikeController.prototype, "remove", null);
exports.BikeController = BikeController = __decorate([
    (0, swagger_1.ApiTags)('bikes'),
    (0, common_1.Controller)('bike'),
    __metadata("design:paramtypes", [bike_service_1.BikeService])
], BikeController);
//# sourceMappingURL=bike.controller.js.map