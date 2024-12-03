import { SubCategoryInterfaces } from 'types/organization/sub-category';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsObject,
  ValidateNested,
} from 'class-validator';
import { LanguageDto, LanguageRequestDto } from 'types/global';
import { NearbyInterfaces } from '../interface/nearby-group.interface';

export class NearbyCreateDto implements NearbyInterfaces.Request {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  nearbyCategoryId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  regionId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  cityId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  staffNumber?: string;

  @ApiProperty({
    example: { ru: 'swagger-ru', uz: 'swagger-uz', cy: 'swagger-cy' },
  })
  @IsNotEmpty()
  @IsObject()
  @ValidateNested()
  @Type(() => LanguageDto)
  name: LanguageDto;


}
