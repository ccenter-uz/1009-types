import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
} from 'class-validator';
import { IdDto } from '../../../common/id.dto';
import { AppLanguages, AppLanguagesList } from 'types/global/types';

export class UpdateCategoryDto extends IdDto {
  @IsNotEmpty()
  @IsNumber()
  staffNumber?: number;

  @IsNotEmpty()
  @IsString()
  @IsEnum(AppLanguagesList, { each: true })
  @Length(0, 150)
  name?: AppLanguages;
}
