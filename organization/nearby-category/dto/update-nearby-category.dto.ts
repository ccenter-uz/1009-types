import { IsNumber, IsOptional, IsString } from 'class-validator';
import { IdDto } from 'types/global';
import { ApiProperty } from '@nestjs/swagger';
import { NearbyCategoryInterfaces } from '../interface/nearby-category-group.interface';
import { Type } from 'class-transformer';

export class NearbyCategoryUpdateDto
  extends IdDto
  implements NearbyCategoryInterfaces.Update
{
  @IsOptional()
  @IsString()
  staffNumber?: string;

  @ApiProperty({
    example: 'swager-name',
  })
  @IsOptional()
  @IsString()
  name: string;

  @ApiProperty({
    type: Number,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  orderNumber?: number;
}
