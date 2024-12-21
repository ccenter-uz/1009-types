import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ListQueryDto } from 'types/global';
import { ApiProperty } from '@nestjs/swagger';

export class SubCategoryFilterDto extends ListQueryDto {
  @ApiProperty({
    type: String,
  })
  @IsOptional()
  @IsString()
  address: string;

  @ApiProperty({
    type: String,
  })
  @IsOptional()
  @IsString()
  apartment: string;

  @ApiProperty({ type: Boolean })
  @IsOptional()
  @IsBoolean()
  @Type(() => Boolean)
  belongAbonent: boolean;

  @ApiProperty({ type: Boolean })
  @IsOptional()
  @IsBoolean()
  @Type(() => Boolean)
  bounded: boolean;

  @ApiProperty({ type: Number })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  categoryId: number;

  @ApiProperty({ type: Number })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  categoryTuId: number;

  @ApiProperty({ type: Number })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  cityId: number;

  @ApiProperty({ type: Number })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  districtId: number;

  @ApiProperty({
    type: String,
  })
  @IsOptional()
  @IsString()
  home: string;

  @ApiProperty({
    type: String,
  })
  @IsOptional()
  @IsString()
  kvartal: string;

  @ApiProperty({ type: Number })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  mainOrg: number;

  @ApiProperty({ type: Boolean })
  @IsOptional()
  @IsBoolean()
  @Type(() => Boolean)
  mine: boolean;

  @ApiProperty({
    type: String,
  })
  @IsOptional()
  @IsString()
  name: string;

  @ApiProperty({
    type: Number,
  })
  @IsOptional()
  @IsNumber()
  nearbyId: Number;

  @ApiProperty({
    type: String,
  })
  @IsOptional()
  @IsString()
  phone: string;

  @ApiProperty({
    type: Number,
  })
  @IsOptional()
  @IsNumber()
  phoneType: Number;

  @ApiProperty({ type: Number })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  regionId: number;

  @ApiProperty({ type: Number })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  subCategoryId: number;

  @ApiProperty({ type: Number })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  subCategoryTuId: number;

  @ApiProperty({ type: Number })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  villageId: number;
}
