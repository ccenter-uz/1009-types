import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsObject,
  IsString,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { LanguageDto, LogDataType } from 'types/global';
import { ProductServiseCategoryInterfaces } from '../interface/product-service-category-group.interface';

export class ProductServiseCategoryCreateDto
  implements ProductServiseCategoryInterfaces.Request
{
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

  @IsOptional()
  @IsObject()
  logData?: LogDataType;
}
