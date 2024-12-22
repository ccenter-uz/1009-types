import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsBoolean,
} from 'class-validator';

export class NearbeesDto {
  @ApiProperty({ example: 'Nearbees' })
  @IsNumber()
  @IsOptional()
  description?: string;

  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsOptional()
  nearby?: number;
}



export type NearbeesType = {
  phones: {
    category?: number;
    subCategory?: number;
  }[];
};
