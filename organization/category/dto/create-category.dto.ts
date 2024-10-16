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
import { LanguageDto } from 'types/global';

export class CategoryCreateDto {
  @IsNotEmpty()
  @IsNumber()
  staffNumber: number;

  @IsNotEmpty()
  @IsObject()
  @ValidateNested()
  @Type(() => LanguageDto)
  name: Object;
}
