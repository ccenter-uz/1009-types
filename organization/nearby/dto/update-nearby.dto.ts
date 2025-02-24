import {
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { IdDto, LanguageDto, LogDataType } from 'types/global';
import { ApiProperty } from '@nestjs/swagger';
import { NearbyInterfaces } from '../interface/nearby-group.interface';

export class NearbyUpdateDto extends IdDto implements NearbyInterfaces.Update {
  @ApiProperty()
  @IsNumber()
  nearbyCategoryId?: number;

  @ApiProperty()
  @IsNumber()
  regionId?: number;

  @ApiProperty()
  @IsNumber()
  cityId?: number;

  @ApiProperty({
    type: Number,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  districtId?: number;

  @IsOptional()
  @IsString()
  staffNumber?: string;

  @ApiProperty({
    example: { ru: 'swagger-ru', uz: 'swagger-uz', cy: 'swagger-cy' },
  })
  @IsObject()
  @ValidateNested()
  @Type(() => LanguageDto)
  name: LanguageDto;
  
  @ApiProperty({
    type: Number,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  orderNumber?: number;

  @IsOptional()
  @IsObject()
  logData?: LogDataType;
}
