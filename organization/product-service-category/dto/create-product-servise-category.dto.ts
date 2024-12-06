import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsString,
  Length,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { LanguageDto, LanguageRequestDto } from 'types/global';
import { ProductServiseCategoryInterfaces } from '../interface/product-service-category-group.interface';

export class ProductServiseCategoryCreateDto implements ProductServiseCategoryInterfaces.Request {

  @IsOptional()
  @IsString()
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
