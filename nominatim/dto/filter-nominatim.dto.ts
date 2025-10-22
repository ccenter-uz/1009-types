import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { ListQueryDto, OrderEnum } from 'types/global';
import { ApiProperty } from '@nestjs/swagger';

export class NominatioumFilterDto {
  @ApiProperty({
    type: String,
    required: true,
    description: 'Search query (e.g. Tashkent, Uzbekistan)',
  })
  @IsString()
  q: string;
}

export class NominatimReverseDto {
  @ApiProperty({
    type: String,
    required: true,
    description: 'Latitude (e.g. 41.3111)',
  })
  @IsString()
  lat: string;

  @ApiProperty({
    type: String,
    required: true,
    description: 'Longitude (e.g. 69.2797)',
  })
  @IsString()
  lon: string;
}


