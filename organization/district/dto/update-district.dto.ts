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
import { DistrictInterfaces } from '../interface/district-group.interface';

export class DistrictUpdateDto extends IdDto implements DistrictInterfaces.Update {
  @ApiProperty()
  @IsNumber()
  regionId?: number;

  @ApiProperty()
  @IsNumber()
  cityId?: number;

  @ApiProperty()
  @IsNumber()
  staffId?: number;

  @ApiProperty()
  @IsNumber()
  index: number;

  @ApiProperty({
    example: { ru: 'swagger-ru', uz: 'swagger-uz', cy: 'swagger-cy' },
  })
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
  @IsObject()
  @ValidateNested()
  @Type(() => LanguageDto)
  new_name: LanguageDto;
}