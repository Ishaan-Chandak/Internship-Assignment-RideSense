import { PartialType } from '@nestjs/mapped-types';
import { CreateBikeDto } from './create-bike.dto';

// here for the update DTO we use the PartialType to extend
// this is because the PartialType automatically makes all the attributes optional of the base class

export class UpdateBikeDto extends PartialType(CreateBikeDto) {}
