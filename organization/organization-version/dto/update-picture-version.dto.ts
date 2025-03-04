import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsBoolean,
} from 'class-validator';

export class PictureVersionDto {
  @ApiProperty({ example: 'Nearbees' })
  @IsNumber()
  @IsOptional()
  description?: string;

  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsOptional()
  nearbyId?: number;
}

export type PictureVersionType = {
  nearbees: {
    description?: number;
    nearbyId?: number;
  }[];
};

export type PictureVersionTypeResponse = {
  // nearbees: string;
  description: string;
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  OrganizationId: number;
  NearbyId: number;
}[];
