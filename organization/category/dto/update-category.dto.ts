import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsString,
  Length,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { IdDto, LanguageDto } from 'types/global';

export class CategoryUpdateDto extends IdDto {
  @IsNotEmpty()
  @IsNumber()
  staffNumber?: number;

  @IsNotEmpty()
  @IsObject()
  @ValidateNested()
  @Type(() => LanguageDto)
  name: Object;
}
