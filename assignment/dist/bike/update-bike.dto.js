"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBikeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_bike_dto_1 = require("./create-bike.dto");
// here for the update DTO we use the PartialType to extend
// this is because the PartialType automatically makes all the attributes optional of the base class
class UpdateBikeDto extends (0, mapped_types_1.PartialType)(create_bike_dto_1.CreateBikeDto) {
}
exports.UpdateBikeDto = UpdateBikeDto;
//# sourceMappingURL=update-bike.dto.js.map