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
import { ProductServiceSubCategoryInterfaces } from '../interface/product-service-sub-category-group.interface';
import { ApiProperty } from '@nestjs/swagger';

export class ProductServiceSubCategoryUpdateDto
  extends IdDto
  implements ProductServiceSubCategoryInterfaces.Update
{
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  productServiceCategoryId?: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  staffNumber?: number;

  @ApiProperty({
    example: { ru: 'swagger-ru', uz: 'swagger-uz', cy: 'swagger-cy' },
  })
  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => LanguageDto)
  name?: LanguageDto;
}
