import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { ListQueryDto } from 'types/global';
import { ApiProperty } from '@nestjs/swagger';

export class OrganizationFilterDto extends ListQueryDto {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsOptional()
  @IsString()
  address?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsOptional()
  @IsString()
  apartment?: string;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return value.toLowerCase() === 'true';
    }
    return Boolean(value);
  })
  @IsOptional()
  @IsBoolean()
  belongAbonent?: boolean;

  @ApiProperty({
    type: Boolean,
    required: false,
  })
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return value.toLowerCase() === 'true';
    }
    return Boolean(value);
  })
  @IsOptional()
  @IsBoolean()
  bounded?: boolean;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  categoryId?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  categoryTuId?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  cityId?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  districtId?: number;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsOptional()
  @IsString()
  home?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsOptional()
  @IsString()
  kvartal?: string;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  mainOrg?: number;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return value.toLowerCase() === 'true';
    }
    return Boolean(value);
  })
  @IsOptional()
  @IsBoolean()
  mine?: boolean;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  nearbyId: number;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  phoneType: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  regionId?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  subCategoryId?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  subCategoryTuId?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  villageId?: number;

  @IsOptional()
  @IsString()
  staffNumber?: string;
}
