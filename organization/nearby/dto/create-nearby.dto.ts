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
  staffNumber: number;

  @ApiProperty({
    example: { ru: 'swagger-ru', uz: 'swagger-uz', cy: 'swagger-cy' },
  })
  @IsNotEmpty()
  @IsObject()
  @ValidateNested()
  @Type(() => LanguageDto)
  name: LanguageDto;

  @ApiProperty({
    example: {
      ru: 'swagger-old-ru',
      uz: 'swagger-old-uz',
      cy: 'swagger-old-cy',
    },
  })
  @IsNotEmpty()
  @IsObject()
  @ValidateNested()
  @Type(() => LanguageDto)
  old_name: LanguageDto;

  @ApiProperty({
    example: {
      ru: 'swagger-new-ru',
      uz: 'swagger-new-uz',
      cy: 'swagger-new-cy',
    },
  })
  @IsNotEmpty()
  @IsObject()
  @ValidateNested()
  @Type(() => LanguageDto)
  new_name: LanguageDto;
}
