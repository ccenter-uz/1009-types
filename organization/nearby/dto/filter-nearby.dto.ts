import { IsNumber, IsOptional } from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { ListQueryDto } from 'types/global';
import { ApiProperty } from '@nestjs/swagger';
import { CityRegionFilterDto } from 'types/global-filters/city-region-filter';

export class NearbyFilterDto extends CityRegionFilterDto {
  @ApiProperty({
    type: Number,
    required: false,
  })
  @Transform(({ value }) => {
    if (value == 'undefined') {
      return undefined;
    }
    return value;
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  nearbyCategoryId?: number;
  
  @ApiProperty({
    type: Number,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  orderNumber?: number;
}
