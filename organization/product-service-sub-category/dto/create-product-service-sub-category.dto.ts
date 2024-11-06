import { Type } from 'class-transformer';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsString,
  Length,
  ValidateNested,
} from 'class-validator';
import { LanguageDto, LanguageRequestDto } from 'types/global';

export class ProductServiceSubCategoryCreateDto extends LanguageRequestDto {
  @IsNotEmpty()
  @IsNumber()
  productServiceCategoryId: number;

  @IsNotEmpty()
  @IsNumber()
  staffNumber: number;

  @IsNotEmpty()
  @IsObject()
  @ValidateNested()
  @Type(() => LanguageDto)
  name: Object;
}
