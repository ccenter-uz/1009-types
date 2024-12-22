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
  category?: number;

  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsOptional()
  subCategory?: number;
}

export type ProductServiceType = {
  phones: {
    category?: number;
    subCategory?: number;
  }[];
};
