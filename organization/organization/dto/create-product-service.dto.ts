import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsBoolean,
} from 'class-validator';

export class ProductServiceDto {
  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsOptional()
  categoryId?: number;

  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsOptional()
  subCategoryId?: number;
}

export type ProductServiceType = {
  productServices: {
    categoryId?: number;
    subCategoryId?: number;
  }[];
};
