import {
  IsBoolean,
  IsDateString,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { Transform, Type } from 'class-transformer';
import {
  LanguageRequestDto,
  ListQueryDto,
  OrganizationStatusEnum,
  StatusEnum,
} from 'types/global';
import { ApiProperty } from '@nestjs/swagger';

export class OrganizationFilterDto extends LanguageRequestDto {
  @ApiProperty({
    type: Number,
    required: false,
  })
  @IsInt()
  @Min(1)
  @IsOptional()
  @Type(() => Number)
  page: number = 1;

  @ApiProperty({
    type: Number,
    required: false,
  })
  @IsInt()
  @Min(1)
  @IsOptional()
  @Type(() => Number)
  limit: number = 10;

  @ApiProperty({
    type: String,
    required: false,
  })
  @IsString()
  @IsOptional()
  search?: string;

  @ApiProperty({
    type: Number,
    required: false,
  })
  @IsDateString()
  @IsOptional()
  dateFrom?: Date | string;

  @ApiProperty({
    type: Number,
    required: false,
  })
  @IsDateString()
  @IsOptional()
  dateTo?: Date | string;

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
  @IsBoolean()
  @IsOptional()
  all?: boolean = false;

  @IsOptional()
  @IsString()
  staffNumber?: string;

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

  @ApiProperty({
    type: Number,
    required: false,
  })
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return parseInt(value, 10);
    }
    return value;
  })
  @IsInt()
  @IsEnum(OrganizationStatusEnum)
  @Min(-1)
  @IsOptional()
  status: OrganizationStatusEnum = OrganizationStatusEnum.Accepted;
}
