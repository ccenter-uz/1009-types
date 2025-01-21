import { IsNumber, IsOptional } from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { ListQueryDto } from 'types/global';
import { ApiProperty } from '@nestjs/swagger';

export class NearbyFilterDto extends ListQueryDto {
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
}
