import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  Length,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { IdDto, LanguageDto } from 'types/global';
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

  @ApiProperty()
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

}
