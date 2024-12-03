import { ImpasseInterfaces } from 'types/organization/impasse';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { LanguageDto } from 'types/global';

export class ImpasseCreateDto implements ImpasseInterfaces.Request {
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
  index: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  staffNumber?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  districtId: number;


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
