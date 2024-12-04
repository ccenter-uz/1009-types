import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsOptional,
} from 'class-validator';
import { NearbyCategoryInterfaces } from '../interface/nearby-category-group.interface';

export class NearbyCategoryCreateDto
  implements NearbyCategoryInterfaces.Request {
  @ApiProperty()
  @IsOptional()
  @IsString()
  staffNumber?: string;

  @ApiProperty({
    example: 'swager-name',
  })
  @IsNotEmpty()
  @IsString()
  name: string;
}
