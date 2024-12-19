import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { ListQueryDto } from 'types/global';
import { ApiProperty } from '@nestjs/swagger';

export class SubCategoryFilterDto extends ListQueryDto {
  @ApiProperty({ type: Number })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  categoryId: number;

  @ApiProperty({ type: Number })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  subCategoryId: number;

  @ApiProperty({ type: Number })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  productServiceCategoryId: number;

  @ApiProperty({ type: Number })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  productServiceSubCategoryId: number;

  @ApiProperty({ type: Number })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  regionId: number;

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

  @ApiProperty({ type: Number })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  villageId: number;

  @ApiProperty({
    type: String,
  })
  @IsOptional()
  @IsString()
  phone: string;

  @ApiProperty({
    type: String,
  })
  @IsOptional()
  @IsString()
  phoneOld: string;

  @ApiProperty({
    type: String,
  })
  @IsOptional()
  @IsString()
  kvartal: string;

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
  apartment: string;

  @ApiProperty({
    type: String,
  })
  @IsOptional()
  @IsString()
  clientId: string;

  @ApiProperty({
    type: String,
  })
  @IsOptional()
  @IsString()
  address: string;

  @ApiProperty({
    type: Number,
  })
  @IsOptional()
  @IsNumber()
  nearbyId: Number;

  // @ApiProperty({ type :Number})
  // @IsOptional()
  // @IsNumber()
  // @Type(() => Number)
  // avenueId: number;

  // @ApiProperty({ type :Number})
  // @IsOptional()
  // @IsNumber()
  // @Type(() => Number)
  // residentialId: number;

  // @ApiProperty({ type :Number})
  // @IsOptional()
  // @IsNumber()
  // @Type(() => Number)
  // areaId: number;

  // @ApiProperty({ type :Number})
  // @IsOptional()
  // @IsNumber()
  // @Type(() => Number)
  // streetId: number;

  // @ApiProperty({ type :Number})
  // @IsOptional()
  // @IsNumber()
  // @Type(() => Number)
  // laneId: number;

  // @ApiProperty({ type :Number})
  // @IsOptional()
  // @IsNumber()
  // @Type(() => Number)
  // impasseId: number;

  // @ApiProperty({ type :Number})
  // @IsOptional()
  // @IsNumber()
  // @Type(() => Number)
  // nearbyId: number;

  // @ApiProperty({ type :Number})
  // @IsOptional()
  // @IsNumber()
  // @Type(() => Number)
  // segmentId: number;

  // @ApiProperty({ type :Number})
  // @IsOptional()
  // @IsNumber()
  // @Type(() => Number)
  // sectionId: number;
}
