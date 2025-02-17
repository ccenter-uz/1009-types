import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { ListQueryDto, OrderEnum } from 'types/global';
import { ApiProperty } from '@nestjs/swagger';

export class CityRegionFilterDto extends ListQueryDto {
  @ApiProperty({
    type: String,
    required: false,
  })
  @Transform(({ value }) => {
    if (value == 'undefined') {
      return undefined;
    }
    return value;
  })
  @IsString()
  @IsOptional()
  @Type(() => String)
  newName?: string;

  @ApiProperty({
    type: String,
    required: false,
  })
  @Transform(({ value }) => {
    if (value == 'undefined') {
      return undefined;
    }
    return value;
  })
  @IsString()
  @IsOptional()
  @Type(() => String)
  oldName?: string;

  @ApiProperty({
    type: Number,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  cityId?: number;

  @ApiProperty({
    type: Number,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  regionId?: number;

  @ApiProperty({
    enum: OrderEnum,
    required: false,
    description: 'Enums: "name", "orderNumber" ',
  })
  @IsEnum(OrderEnum)
  @IsOptional()
  order?: OrderEnum;
}
