import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
} from 'class-validator';
import { AppLanguages, AppLanguagesList } from 'types/global/types';

export class CreateCategoryDto {
  @IsNotEmpty()
  @IsNumber()
  staffNumber: number;

  @IsNotEmpty()
  @IsString()
  @IsEnum(AppLanguagesList, { each: true })
  @Length(0, 150)
  name: AppLanguages;
}
