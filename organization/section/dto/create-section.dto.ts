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

export class SectionCreateDto extends LanguageRequestDto {

  @IsNotEmpty()
  @IsString()
  name: string;
}
