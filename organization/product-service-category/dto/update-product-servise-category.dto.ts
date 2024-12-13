import {
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { IdDto, LanguageDto } from 'types/global';
import { ApiProperty } from '@nestjs/swagger';
import { ProductServiseCategoryInterfaces } from '../interface/product-service-category-group.interface';

export class ProductServiseCategoryUpdateDto
  extends IdDto
  implements ProductServiseCategoryInterfaces.Update
{
  @IsOptional()
  @IsString()
  staffNumber?: string;

  @ApiProperty({
    example: { ru: 'swagger-ru', uz: 'swagger-uz', cy: 'swagger-cy' },
  })
  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => LanguageDto)
  name: LanguageDto;
}
