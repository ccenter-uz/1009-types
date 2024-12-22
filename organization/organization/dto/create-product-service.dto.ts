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
  productServiceCategoryId?: number;

  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsOptional()
  productServiceSubCategoryId?: number;
}

export type ProductServiceType = {
  productServices: {
    productServiceCategoryId?: number;
    productServiceSubCategoryId?: number;
    link: string;
  }[];
};

export type ProductServiceTypeResponce = {
  productServices: {
    productServiceCategoryId?: number;
    ProductServiceSubCategoryId?: number;
    link: string;
  }[];
};
